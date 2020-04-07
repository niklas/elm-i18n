module Localized.PO exposing (parse, parseFileName, write)

import Localized exposing (..)
import Localized.Filename as Filename
import PO.Export as Export
import PO.Import as Import


parse : ModuleName -> SourceCode -> List Element
parse =
    Import.generate


write =
    Export.generate


parseFileName : String -> ( ModuleName, LangCode )
parseFileName =
    Filename.toModuleNameAndLangPrefix
