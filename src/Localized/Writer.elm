module Localized.Writer exposing (generate)

{-| This is the inverse of the Localized.Parser. The Writer takes a list of
module names and associated localized elements and returns the source code for
elm modules implementing the localized elements.

@docs generate

-}

import Localized
import Localized.Writer.Element
import Localized.Writer.Module


{-| Generate elm-source code for a list of modules and their associated
localized elements.
-}
generate : List Localized.Module -> List ( Localized.ModuleName, Localized.SourceCode )
generate =
    List.map moduleImplementation


moduleImplementation : Localized.Module -> ( Localized.ModuleName, Localized.SourceCode )
moduleImplementation mod =
    let
        ( moduleName, _ ) =
            mod
    in
    ( moduleName
    , Localized.Writer.Module.implementation element mod
    )


element : Localized.Element -> Localized.SourceCode
element ele =
    let
        c =
            Localized.elementMeta .comment ele
    in
    comment c
        ++ Localized.Writer.Element.typeDeclaration ele
        ++ "\n"
        ++ Localized.Writer.Element.head ele
        ++ "\n"
        ++ Localized.Writer.Element.body ele


comment : Localized.Comment -> Localized.SourceCode
comment string =
    if String.isEmpty string then
        ""

    else
        "{-| " ++ string ++ "\n-}\n"
