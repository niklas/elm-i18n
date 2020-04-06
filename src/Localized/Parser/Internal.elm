module Localized.Parser.Internal exposing (..)

import List.Extra as List
import Localized
import Regex exposing (Regex)
import Utils.Regex as Utils


regex : String -> Regex
regex string =
    Regex.fromString string |> Maybe.withDefault Regex.never


regexFindModuleName : Regex
regexFindModuleName =
    regex "module Translation\\.([^\\s]*) exposing"


regexStringDeclarations : Regex
regexStringDeclarations =
    regex "([A-Za-z][A-Za-z0-9]*)\\s+:\\s+(.*)String"


regexSimpleStringValue : String -> Regex
regexSimpleStringValue key =
    regex (key ++ "[\\s|\\n]*=[\\s|\\n]*(\".*\")")


regexStringComment : String -> Regex
regexStringComment key =
    regex ("\\{-\\| ([^\\}]*)\\n-\\}\\n" ++ key ++ "\\s+:")


regexFormats : String -> Regex
regexFormats key =
    -- myFormat ([^=\n]*) =[\s\n]((?:.+\r?\n)+(?=(\r?\n)?))
    (key ++ " ([^=\\n]*)=[\\s\\n]((?:.+\\r?\\n)+(?=(\\r?\\n)?))")
        |> regex


findModuleName : Localized.SourceCode -> Localized.ModuleName
findModuleName source =
    Regex.findAtMost 1 regexFindModuleName source
        |> List.head
        |> Utils.submatchAt 0
        |> Maybe.withDefault "unknown"


{-| Finds all top level string declarations, both constants (`key : String`
and functions returning strings (e.g. `fun : String -> String`).
-}
stringDeclarations : Localized.SourceCode -> List ( Localized.Key, List String )
stringDeclarations source =
    Regex.find regexStringDeclarations source
        |> List.filterMap
            (\match ->
                -- The submatches contain the key (at head)
                -- and the parameters as string (or empty) at index 1.
                case match.submatches of
                    [ Just key, Nothing ] ->
                        Just ( key, [] )

                    [ Just key, Just parametersString ] ->
                        let
                            parameters =
                                String.split " -> " parametersString
                                    |> List.filter (String.isEmpty >> not)
                        in
                        Just ( key, parameters )

                    _ ->
                        Nothing
            )


findStaticElementForKey : Localized.SourceCode -> Localized.Key -> Maybe Localized.Element
findStaticElementForKey source key =
    let
        maybeValue =
            Regex.findAtMost 1 (regexSimpleStringValue key) source
                |> List.head
                |> Utils.submatchAt 0
                -- The capture groups in Elm Kernel's Regex lib cannot match empty strings, they return Nothing instead of Just ""
                -- https://github.com/elm/regex/issues/5
                -- That's why we had to add the quotation marks into the capture group and remove them here again. Thx evancz.
                |> Maybe.map (String.slice 1 -1)
    in
    case maybeValue of
        Just value ->
            Localized.Static (Localized.Meta key (findComment source key)) value
                |> Localized.ElementStatic
                |> Just

        Nothing ->
            Nothing


findFormatElementForKey : Localized.SourceCode -> Localized.Key -> Maybe Localized.Element
findFormatElementForKey source key =
    let
        ex =
            regexFormats key

        match =
            Regex.findAtMost 1 ex source
                |> List.head

        placeholders =
            case Utils.submatchAt 0 match of
                Just placeholderString ->
                    String.split " " placeholderString
                        |> trimmedStrings

                Nothing ->
                    []

        content =
            case Utils.submatchAt 1 match of
                Just placeholderString ->
                    String.split "++" placeholderString
                        |> trimmedStrings
                        |> List.map formatComponentFromString

                Nothing ->
                    []
    in
    case placeholders of
        [] ->
            Nothing

        placeholderList ->
            Localized.Format (Localized.Meta key (findComment source key)) placeholderList content
                |> Localized.ElementFormat
                |> Just


findComment : Localized.SourceCode -> Localized.Key -> Localized.Comment
findComment source key =
    let
        match =
            Regex.findAtMost 1 (regexStringComment key) source
                |> List.head
    in
    Utils.submatchAt 0 match
        |> Maybe.withDefault ""


formatComponentFromString : String -> Localized.FormatComponent
formatComponentFromString value =
    if String.endsWith "\"" value && String.startsWith "\"" value then
        -- Remove quotes from value
        String.dropLeft 1 value
            |> String.dropRight 1
            |> Localized.FormatComponentStatic

    else
        Localized.FormatComponentPlaceholder value


trimmedStrings : List String -> List String
trimmedStrings stringList =
    List.map String.trim stringList
        |> List.filter (String.isEmpty >> not)
