module Localized.CSV exposing (parse, parseFileName)

import CSV.Import as Import
import Localized exposing (..)
import Localized.Filename as Filename


parse : ModuleName -> SourceCode -> List Element
parse =
    Import.generate


parseFileName : String -> ( ModuleName, LangCode )
parseFileName =
    Filename.toModuleNameAndLangPrefix
