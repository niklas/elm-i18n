module Localized.Filename exposing (changeExt, lastSegmentFirst, toCSV, toPO)

import Regex exposing (Regex)


toCSV : String -> String
toCSV =
    String.toLower >> changeExt "csv"


toPO : String -> String
toPO =
    String.toLower >> changeExt "po"


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
                |> Regex.fromString
                |> Maybe.withDefault Regex.never
    in
    case org |> Regex.findAtMost 1 ex |> List.head of
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
    Regex.fromString "\\.\\w+$" |> Maybe.withDefault Regex.never


localeEx : String
localeEx =
    "\\w+"


extensionEx : String
extensionEx =
    "\\w+"
