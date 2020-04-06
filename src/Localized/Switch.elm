module Localized.Switch exposing (generate)

{-|

    Reads in all the Translation.elm files and generates a master switch for
    them. Elements only present in one of them will still be added.

-}

import Dict exposing (Dict)
import Localized
import Localized.Element as Element
import Localized.Parser as Parser
import Localized.Writer.Element exposing (tab)
import Localized.Writer.Module



-- TODO we should pass a list of Modules and mangle them here


generate : List Localized.LangCode -> List Localized.SourceCode -> List ( Localized.ModuleName, Localized.SourceCode )
generate languages sources =
    []



-- mainModule languages
--     :: (sources
--             |> List.map Parser.parse
--             |> flatten2D
--             -- |> List.map (removeLocale languages)
--             |> unique
--             |> indexBy (Localized.elementMeta .moduleName)
--             |> Dict.toList
--             |> List.map (\( n, e ) -> Localized.buildModule n e)
--             |> List.map (switchSource languages)
--        )


unique : List Localized.Element -> List Localized.Element
unique elements =
    u elements []


u : List Localized.Element -> List Localized.Element -> List Localized.Element
u list have =
    case list of
        e :: rest ->
            if member e have then
                u rest have

            else
                u rest (e :: have)

        [] ->
            have


flatten2D : List (List a) -> List a
flatten2D list =
    List.foldr (++) [] list


member : Localized.Element -> List Localized.Element -> Bool
member e list =
    List.any (Element.isEqual e) list


indexBy : (Localized.Element -> comparable) -> List Localized.Element -> Dict comparable (List Localized.Element)
indexBy keymaker elements =
    elements
        |> List.foldr
            (\e d ->
                Dict.update (keymaker e)
                    (\v ->
                        case v of
                            Nothing ->
                                Just [ e ]

                            Just l ->
                                Just (e :: l)
                    )
                    d
            )
            Dict.empty


switchSource : List Localized.LangCode -> Localized.Module -> ( Localized.ModuleName, Localized.SourceCode )
switchSource languages ({ name } as mod) =
    ( name
    , Localized.Writer.Module.head mod
        ++ Localized.Writer.Module.importModuleExposingAll (Localized.namedModule "Translation")
        ++ (String.join "" <|
                List.map
                    (Localized.Writer.Module.importModule << Localized.namedModule << Localized.languageModuleName name)
                    languages
           )
        ++ "\n\n"
        ++ Localized.Writer.Module.elements (elementSource languages) mod
    )


elementSource : List Localized.LangCode -> Localized.Element -> Localized.SourceCode
elementSource languages element =
    let
        name =
            Localized.elementMeta .key element

        -- TODO but here, we have to pass the module(name)
        -- Localized.elementMeta .moduleName element
        moduleName =
            "TODO"

        placeholders =
            Localized.Writer.Element.placeholders element
    in
    name
        ++ " : Language -> "
        ++ placeholders
        ++ "\n"
        ++ name
        ++ " language =\n"
        ++ (tab ++ "case language of\n")
        ++ (String.join "\n" <|
                List.map
                    (\l ->
                        (tab ++ tab)
                            ++ l
                            ++ " -> "
                            ++ moduleName
                            ++ "."
                            ++ l
                            ++ "."
                            ++ name
                    )
                    languages
           )


mainModule : List Localized.LangCode -> ( Localized.ModuleName, Localized.SourceCode )
mainModule languages =
    let
        name =
            "Translation"

        mod =
            Localized.namedModule name
    in
    ( name
    , Localized.Writer.Module.head mod
        ++ "type Language = "
        ++ String.join " | " languages
        ++ "\n"
    )
