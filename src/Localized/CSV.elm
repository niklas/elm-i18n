module Localized.CSV exposing (parse, parseFileName, write)

import CSV.Export as Export
import CSV.Import as Import
import Localized exposing (..)
import Localized.Filename as Filename


parse : ModuleName -> SourceCode -> List Element
parse =
    Import.generate


write =
    Export.generate


parseFileName : String -> ( ModuleName, LangCode )
parseFileName =
    Filename.toModuleNameAndLangPrefix
