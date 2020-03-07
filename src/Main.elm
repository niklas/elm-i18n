port module Main exposing (main)

{-| A worker program providing and interface for the Import and Export functions
in the CSV and PO submodules.

@docs main

-}

import CSV.Export
import CSV.Import
import Flip exposing (flip)
import Json.Decode
import Localized
import Localized.Filename as Filename
import Localized.Parser as Localized
import Localized.Switch
import Localized.Writer
import PO.Export
import PO.Import
import Platform exposing (worker)


type alias Model =
    {}


type Format
    = CSV
    | PO


type Operation
    = Export Format
    | Import Format
    | GenSwitch Format


type alias PathAndContent =
    ( String, String )


port exportResult : PathAndContent -> Cmd msg


port importResult : List PathAndContent -> Cmd msg


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


formatFromString : Maybe String -> Format
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


operationExport : List PathAndContent -> Format -> Cmd Never
operationExport sources format =
    let
        exportFunction =
            case format of
                CSV ->
                    CSV.Export.generate

                PO ->
                    PO.Export.generate

        filenameFunction =
            case format of
                CSV ->
                    Filename.toCSV

                PO ->
                    Filename.toPO
    in
    sources
        |> List.map (Tuple.mapSecond Localized.parse)
        |> List.map (Tuple.mapSecond <| List.map Localized.elementRemoveLang)
        |> List.map (Tuple.mapSecond exportFunction)
        |> List.map (Tuple.mapFirst filenameFunction)
        |> List.map (Tuple.mapFirst Filename.lastSegmentFirst)
        |> List.map exportResult
        |> Cmd.batch


operationImport : List PathAndContent -> Maybe (List Localized.LangCode) -> Format -> Cmd Never
operationImport csvs mlangs format =
    let
        lang =
            mlangs |> Maybe.withDefault [] |> List.head |> Maybe.withDefault "Klingon"

        importFunction =
            case format of
                CSV ->
                    CSV.Import.generate

                PO ->
                    PO.Import.generate
    in
    csvs
        |> List.map (Tuple.mapSecond importFunction)
        |> List.map (Tuple.mapSecond <| List.map <| addLanguageToModuleName lang)
        |> List.map (Tuple.mapSecond Localized.Writer.generate)
        |> List.map (Tuple.mapSecond <| List.map slashifyModuleName)
        -- TODO generate po/csv filename here
        |> List.map Tuple.second
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
        |> importResult


update : Never -> Model -> ( Model, Cmd Never )
update _ model =
    ( model, Cmd.none )


slashifyModuleName : Localized.ModuleImplementation -> Localized.ModuleImplementation
slashifyModuleName =
    Tuple.mapFirst (String.split "." >> String.join "/")


addLanguageToModuleName : Localized.LangCode -> Localized.Module -> Localized.Module
addLanguageToModuleName lang =
    Tuple.mapFirst (flip Localized.languageModuleName lang)
