module Localized.Filename exposing (changeExt, toCSV, toPO)

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


extRegex : Regex
extRegex =
    Regex.fromString "\\.\\w+$" |> Maybe.withDefault Regex.never
