module Localized.Elm exposing (modulePrefix, parse, parseFileName)

import Localized exposing (..)
import Localized.Parser


parse : SourceCode -> List Element
parse =
    Localized.Parser.parse


modulePrefix =
    "Translation"


parseFileName =
    "TODO"
