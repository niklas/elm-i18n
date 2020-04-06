module Localized.Writer.Module exposing
    ( elements
    , head
    , implementation
    , importModule
    , importModuleExposingAll
    )

{-| Provides code generation for Localized.Modules
-}

import Flip exposing (flip)
import Localized
import Localized.Elm as Elm


{-| Return the complete implementation for the Localized.Module, needs a function to implement each Localized.Element.
-}
implementation : (Localized.Element -> Localized.SourceCode) -> Localized.Module -> Localized.SourceCode
implementation functionImplementation mod =
    head mod
        ++ "\n"
        ++ elements functionImplementation mod


elements : (Localized.Element -> Localized.SourceCode) -> Localized.Module -> Localized.SourceCode
elements functionImplementation mod =
    List.map functionImplementation mod.elements
        |> String.join "\n\n\n"
        |> String.trim
        |> flip String.append "\n"


head : Localized.Module -> Localized.SourceCode
head { name } =
    "module "
        ++ "Translation."
        ++ name
        ++ " exposing (..)\n\n{-| -}\n\n"


importModule : Localized.Module -> Localized.SourceCode
importModule { name, lang } =
    "import " ++ Elm.modulePrefix ++ "." ++ name ++ "." ++ lang ++ "\n"


importModuleExposingAll : Localized.Module -> Localized.SourceCode
importModuleExposingAll { name } =
    "import "
        ++ name
        ++ " exposing (..)\n"
