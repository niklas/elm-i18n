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
import Localized.CSV as CSV
import Localized.Element as Element
import Localized.Elm as Elm
import Localized.Filename as Filename
import Localized.Module as Module
import Localized.PO as PO
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
                    Import
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


operationExport : List PathAndContent -> FileFormat -> Cmd Never
operationExport sources format =
    sources
        |> List.map parseElm
        |> List.map (write format)
        |> List.map exportResult
        |> Cmd.batch


operationImport : List PathAndContent -> Maybe (List Localized.LangCode) -> FileFormat -> Cmd Never
operationImport sources mlangs format =
    let
        locales =
            Maybe.withDefault [ "Klingon" ] mlangs |> List.map Filename.normalizeLanguageCode

        modules =
            sources
                |> List.map (parse format)

        -- TODO find undefined translations, default to other langs
        switches =
            modules
                |> Localized.Switch.generate locales
    in
    (modules |> List.map writeElm)
        ++ switches
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


parse : FileFormat -> PathAndContent -> Module
parse format ( fileName, content ) =
    let
        ( moduleName, lang ) =
            case format of
                CSV ->
                    CSV.parseFileName fileName

                PO ->
                    PO.parseFileName fileName

        parsed =
            case format of
                CSV ->
                    CSV.parse

                PO ->
                    PO.parse
    in
    { name = moduleName, lang = lang, elements = parsed moduleName content }


parseElm : PathAndContent -> Module
parseElm ( fileName, content ) =
    let
        ( moduleName, lang ) =
            Filename.toModuleNameAndLangPostfix fileName
    in
    { name = moduleName, lang = lang, elements = Elm.parse content }


write : FileFormat -> Module -> PathAndContent
write format modul =
    let
        fileName =
            case format of
                CSV ->
                    Filename.toCSV modul

                PO ->
                    Filename.toPO modul

        content =
            case format of
                CSV ->
                    Module.toCSV modul

                PO ->
                    Module.toPO modul
    in
    ( fileName, content )


writeElm : Module -> PathAndContent
writeElm modul =
    let
        fileName =
            Filename.toElmWithLocale modul

        content =
            Module.toElm modul
    in
    ( fileName, content )
