module CSV.Import exposing (generate)

{-| Generates a list of localized elements for multiple modules from a CSV
string. The CSV string is expected to have the following columns:
modulename, key, comment, placeholders, value

This matches the export format generated by CSV.Export.generate.

Use Localized.Writer.write to create elm code from the list of localized
elements.

@docs generate

-}

import Csv
import Dict
import Localized
import Set


{-| Generates localized elements for multiple modules from a CSV
string. The CSV string is expected to have the following columns:
modulename, key, comment, placeholders, value

You will usually use this output to create elm code:

    CSV.Import.generate csvString
    |> Localized.Writer.write

-}
generate : String -> List Localized.Module
generate csv =
    case Csv.parse csv of
        Result.Ok lines ->
            generateForCsv lines

        Result.Err err ->
            Debug.log "Could not parse CSV" err
                |> always []


generateForCsv : Csv.Csv -> List Localized.Module
generateForCsv lines =
    let
        modules =
            allModuleNames lines.records
                |> Set.fromList
                |> Set.toList

        -- The lines can contain multiple modules.
        -- Generate a dictionary of all modules and there respective lines in the CSV.
        linesForModules =
            modules
                |> List.map
                    (\name ->
                        ( name
                        , linesForModule name lines.records
                        )
                    )
                |> Dict.fromList
    in
        -- Generate the source code for each module based on the lines
        -- grouped in the expression above.
        List.map
            (\name ->
                let
                    linesForThisModule =
                        Dict.get name linesForModules
                            |> Maybe.withDefault []
                in
                    ( name, generateForModule linesForThisModule )
            )
            modules


generateForModule : List (List String) -> List Localized.Element
generateForModule lines =
    List.filterMap fromLine lines


allModuleNames : List (List String) -> List String
allModuleNames lines =
    List.filterMap moduleNameForLine lines


moduleNameForLine : List String -> Maybe String
moduleNameForLine columns =
    case columns of
        modulename :: _ :: _ :: _ :: _ :: xs ->
            Just modulename

        _ ->
            Nothing


linesForModule : Localized.ModuleName -> List (List String) -> List (List String)
linesForModule moduleName lines =
    List.filter (\line -> moduleNameForLine line == Just moduleName) lines


fromLine : List String -> Maybe Localized.Element
fromLine columns =
    case columns of
        modulename :: key :: comment :: placeholders :: value :: xs ->
            Just (code modulename key comment placeholders value)

        _ ->
            Nothing


code : Localized.ModuleName -> Localized.Key -> Localized.Comment -> String -> Localized.Value -> Localized.Element
code modulename key comment placeholderString value =
    let
        placeholders =
            String.split " " placeholderString
                |> List.map String.trim
                |> List.filter (String.isEmpty >> not)

        numPlaceholders =
            List.length placeholders
    in
        if numPlaceholders == 0 then
            staticElement modulename key comment value
        else
            formatElement modulename key comment placeholders value


formatElement : Localized.ModuleName -> Localized.Key -> Localized.Comment -> List Localized.Placeholder -> Localized.Value -> Localized.Element
formatElement modulename key comment placeholders value =
    let
        components =
            -- "Hello {{p}} Goodbye {{q}}" -> ["Hello ", "p}} Goodbye ", "q }}"]
            String.split "{{" value
                |> withoutEmptyStrings
                |> List.map
                    (\candidate ->
                        if String.contains "}}" candidate then
                            -- "p}} Goodbye " -> ["p", " Goodbye "]
                            String.split "}}" candidate
                                |> withoutEmptyStrings
                                -- ["p", " Goodbye "] -> [FormatComponentPlaceholder "p", Localized.FormatComponentStatic " Goodbye "]
                                |> List.indexedMap
                                    (\index submatch ->
                                        if index % 2 == 0 then
                                            Localized.FormatComponentPlaceholder (String.trim submatch)
                                        else
                                            Localized.FormatComponentStatic submatch
                                    )
                        else
                            [ Localized.FormatComponentStatic candidate ]
                    )
                |> List.concat
    in
        Localized.ElementFormat
            { meta =
                { moduleName = modulename
                , key = key
                , comment = comment
                }
            , placeholders = placeholders
            , components = components
            }


staticElement : Localized.ModuleName -> Localized.Key -> Localized.Comment -> Localized.Value -> Localized.Element
staticElement modulename key comment value =
    Localized.ElementStatic
        { meta =
            { moduleName = modulename
            , key = key
            , comment = comment
            }
        , value = value
        }


withoutEmptyStrings : List String -> List String
withoutEmptyStrings =
    List.filter (String.isEmpty >> not)
