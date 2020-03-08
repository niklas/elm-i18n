module Localized.Filename exposing
    ( changeExt
    , lastSegmentFirst
    , toCSV
    , toElm
    , toElmWithLocale
    , toModuleName
    , toPO
    )

import Flip exposing (flip)
import Regex exposing (Regex)
import String.Extra
import Utils.Regex exposing (findFirst, regex)


toCSV : String -> String
toCSV =
    String.toLower >> changeExt "csv"


toPO : String -> String
toPO =
    String.toLower >> changeExt "po"


toModuleName : String -> String
toModuleName org =
    let
        ex =
            "^[^/]/(.*)\\." ++ extensionEx ++ "$"
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


toElm : String -> String
toElm moduleName =
    (moduleName
        |> String.split "."
        |> List.append [ "Translation" ]
        |> String.join "/"
    )
        ++ ".elm"


toElmWithLocale : String -> String -> String
toElmWithLocale locale moduleName =
    (moduleName
        |> String.split "."
        |> List.append [ "Translation" ]
        |> flip List.append [ locale ]
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
