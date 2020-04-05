port module Main exposing (main)

{-| A worker program providing and interface for the Import and Export functions
in the CSV and PO submodules.

@docs main

-}

import CSV.Export
import CSV.Import
import Flip exposing (flip)
import Json.Decode
import Localized exposing (..)
import Localized.Element as Element
import Localized.Filename as Filename
import Localized.Parser as Localized
import Localized.Switch
import Localized.Writer
import PO.Export
import PO.Import
import Platform exposing (worker)


type alias Model =
    {}


type Operation
    = Export FileFormat
    | Import FileFormat
    | GenSwitch FileFormat


type alias PathAndContent =
    ( String, String )


port exportResult : PathAndContent -> Cmd msg


port importResult : PathAndContent -> Cmd msg


operationFromString : String -> Maybe String -> Operation
operationFromString operation formatString =
    formatFromString formatString
        |> (case operation of
                "import" ->
                    Import

                "export" ->
                    Export

                _ ->
                    GenSwitch
           )


formatFromString : Maybe String -> FileFormat
formatFromString maybeFormat =
    let
        formatString =
            Maybe.map String.toUpper maybeFormat
    in
    if formatString == Just "PO" then
        PO

    else
        CSV


type alias Flags =
    { sources : List PathAndContent
    , operation : String
    , format : Maybe String
    , languages : Maybe (List String)
    }


{-| A worker program providing and interface for the Import and Export functions
in the CSV and PO submodules.
-}
main : Program Flags Model Never
main =
    worker { init = init, update = update, subscriptions = always Sub.none }


init : Flags -> ( Model, Cmd Never )
init flags =
    case operationFromString flags.operation flags.format of
        Export format ->
            ( {}, operationExport flags.sources format )

        Import format ->
            ( {}, operationImport flags.sources flags.languages format )

        GenSwitch _ ->
            ( {}, operationGenerateSwitch flags.sources flags.languages )


operationExport : List PathAndContent -> FileFormat -> Cmd Never
operationExport sources format =
    let
        filenameFunction =
            case format of
                CSV ->
                    Filename.toCSV

                PO ->
                    Filename.toPO
    in
    sources
        |> List.map (Tuple.mapSecond Localized.parse)
        |> List.map (Tuple.mapSecond <| List.map Element.removeLang)
        |> List.map (Tuple.mapSecond <| Element.exportTo format)
        |> List.map (Tuple.mapFirst filenameFunction)
        |> List.map (Tuple.mapFirst Filename.lastSegmentFirst)
        |> List.map exportResult
        |> Cmd.batch


operationImport : List PathAndContent -> Maybe (List Localized.LangCode) -> FileFormat -> Cmd Never
operationImport sources mlangs format =
    let
        lang =
            mlangs |> Maybe.withDefault [] |> List.head |> Maybe.withDefault "Klingon"
    in
    sources
        |> Debug.log "sources"
        |> List.map (Tuple.mapFirst Filename.toModuleName)
        |> List.map (Element.importFrom format)
        -- TODO generate elm filename here
        |> List.map Localized.Writer.generate
        |> List.map (Tuple.mapFirst Filename.toElm)
        |> List.map importResult
        |> Cmd.batch


operationGenerateSwitch : List PathAndContent -> Maybe (List Localized.LangCode) -> Cmd Never
operationGenerateSwitch sources mlangs =
    let
        locales =
            Maybe.withDefault [] mlangs
    in
    sources
        |> List.map Tuple.second
        |> Localized.Switch.generate locales
        |> List.map slashifyModuleName
        |> List.map importResult
        |> Cmd.batch


update : Never -> Model -> ( Model, Cmd Never )
update _ model =
    ( model, Cmd.none )


slashifyModuleName : Localized.ModuleImplementation -> Localized.ModuleImplementation
slashifyModuleName =
    Tuple.mapFirst (String.split "." >> String.join "/")


addLanguageToModuleName : Localized.LangCode -> Localized.Module -> Localized.Module
addLanguageToModuleName lang =
    Localized.mapModuleName (flip Localized.languageModuleName lang)
