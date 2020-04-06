module Localized.PO exposing (parse, parseFileName)

import Localized exposing (..)
import Localized.Filename as Filename
import PO.Import as Import


parse : ModuleName -> SourceCode -> List Element
parse =
    Import.generate


parseFileName : String -> ( ModuleName, LangCode )
parseFileName =
    Filename.toModuleNameAndLangPrefix
