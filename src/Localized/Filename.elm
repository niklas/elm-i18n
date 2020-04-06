module Localized.Filename exposing
    ( changeExt
    , lastSegmentFirst
    , toCSV
    , toElm
    , toElmWithLocale
    , toModuleName
    , toModuleNameAndLangPostfix
    , toModuleNameAndLangPrefix
    , toPO
    )

import Flip exposing (flip)
import Localized exposing (..)
import Regex exposing (Regex)
import String.Extra
import Utils.Regex exposing (findFirst, regex)


toCSV : Module -> String
toCSV =
    toExtWithLangPrefix "csv"


toPO : Module -> String
toPO =
    toExtWithLangPrefix "po"


toExtWithLangPrefix : String -> Module -> String
toExtWithLangPrefix ext { name, lang } =
    String.toLower lang ++ "/" ++ String.toLower name ++ "." ++ ext


toModuleName : String -> String
toModuleName org =
    let
        ex =
            "^[^/]+/(.+)\\." ++ extensionEx ++ "$"
    in
    case org |> findFirst ex of
        Nothing ->
            org

        Just match ->
            case match.submatches of
                [ Just slashyPath ] ->
                    slashyPath
                        |> String.split "/"
                        |> List.map String.Extra.classify
                        |> String.join "."

                _ ->
                    org


toModuleNameAndLangPrefix : String -> ( String, String )
toModuleNameAndLangPrefix org =
    let
        ex =
            "^([^/]+)/(.+)\\." ++ extensionEx ++ "$"
    in
    case org |> findFirst ex of
        Nothing ->
            ( org, "" )

        Just match ->
            case match.submatches of
                [ Just langCode, Just slashyPath ] ->
                    ( slashyPath
                        |> String.split "/"
                        |> List.map String.Extra.classify
                        |> String.join "."
                    , langCode |> String.toLower
                    )

                _ ->
                    ( org, "" )


toModuleNameAndLangPostfix : String -> ( String, String )
toModuleNameAndLangPostfix org =
    let
        ex =
            "^(.+)/([^/]+)\\." ++ extensionEx ++ "$"
    in
    case org |> findFirst ex of
        Nothing ->
            ( org, "" )

        Just match ->
            case match.submatches of
                [ Just slashyPath, Just langCode ] ->
                    ( slashyPath
                        |> String.split "/"
                        |> List.map String.Extra.classify
                        |> String.join "."
                    , langCode |> String.toLower
                    )

                _ ->
                    ( org, "" )


toElm : Module -> String
toElm { name } =
    (name
        |> String.split "."
        |> List.append [ "Translation" ]
        |> String.join "/"
    )
        ++ ".elm"


toElmWithLocale : Module -> String
toElmWithLocale { name, lang } =
    (name
        |> String.split "."
        |> List.append [ "Translation" ]
        |> flip List.append [ lang ]
        |> String.join "/"
    )
        ++ ".elm"


changeExt : String -> String -> String
changeExt ext org =
    Regex.replace extRegex (always <| "." ++ ext) org



-- transforms "foo/bar/de.po" -> "de/foo/bar.po" for any "foo/bar"


lastSegmentFirst : String -> String
lastSegmentFirst org =
    let
        ex =
            "^(.*)/("
                ++ localeEx
                ++ ")\\.("
                ++ extensionEx
                ++ ")$"
    in
    case org |> findFirst ex of
        Nothing ->
            org

        Just match ->
            case match.submatches of
                [ Just name, Just locale, Just ext ] ->
                    locale ++ "/" ++ name ++ "." ++ ext

                _ ->
                    org


extRegex : Regex
extRegex =
    regex "\\.\\w+$"


localeEx : String
localeEx =
    "\\w+"


extensionEx : String
extensionEx =
    "\\w+"
