module Localized.Switch exposing (generate)

{-|

    Reads in all the Translation.elm files and generates a master switch for
    them. Elements only present in one of them will still be added.

-}

import Dict exposing (Dict)
import Localized exposing (..)
import Localized.Element as Element
import Localized.Elm as Elm
import Localized.Filename as Filename
import Localized.Parser as Parser
import Localized.Writer.Element exposing (tab)
import Localized.Writer.Module as Writer


generate : List LangCode -> List Module -> List PathAndContent
generate languages modules =
    mainModule languages
        :: (modules
                |> indexBy .name
                |> Dict.toList
                |> List.map
                    (\( moduleName, mods ) ->
                        let
                            elements =
                                mods |> List.map .elements |> flatten2D |> unique

                            switchModule =
                                Localized.buildModule moduleName elements
                        in
                        switchSource switchModule mods
                    )
           )


unique : List Element -> List Element
unique elements =
    u elements []


u : List Element -> List Element -> List Element
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


member : Element -> List Element -> Bool
member e list =
    List.any (Element.isEqual e) list


indexBy : (a -> comparable) -> List a -> Dict comparable (List a)
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


switchSource : Module -> List Module -> PathAndContent
switchSource ({ name } as mod) mods =
    ( Filename.toElm mod
    , Writer.head mod
        ++ Writer.importModuleExposingAll (Localized.namedModule "Translation")
        ++ (String.join "" <|
                List.map
                    Writer.importModule
                    mods
           )
        ++ "\n\n"
        ++ Writer.elements (elementSource name mods) mod
    )


elementSource : ModuleName -> List Module -> Element -> SourceCode
elementSource moduleName mods element =
    let
        name =
            Localized.elementMeta .key element

        placeholders =
            Localized.Writer.Element.placeholders element

        languages =
            List.map .lang mods
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


mainModule : List Localized.LangCode -> PathAndContent
mainModule languages =
    let
        name =
            "Translation.elm"

        mod =
            Localized.namedModule name
    in
    ( name
    , Writer.head mod
        ++ "type Language = "
        ++ String.join " | " languages
        ++ "\n"
    )
