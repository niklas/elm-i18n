module Utils.Regex exposing
    ( findFirst
    , regex
    , submatchAt
    )

import List.Extra as List
import Regex


regex : String -> Regex.Regex
regex string =
    case Regex.fromString string of
        Just compiled ->
            compiled

        Nothing ->
            let
                _ =
                    Debug.log "Invalid Regex:" string
            in
            Regex.never


findFirst : String -> String -> Maybe Regex.Match
findFirst pattern string =
    string |> Regex.findAtMost 1 (regex pattern) |> List.head


submatchAt : Int -> Maybe Regex.Match -> Maybe String
submatchAt index match =
    match
        |> Maybe.map (.submatches >> List.getAt index)
        |> Maybe.withDefault Nothing
        |> Maybe.withDefault Nothing
