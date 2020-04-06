module Localized.Elm exposing (parse, parseFileName)

import Localized exposing (..)
import Localized.Parser


parse : SourceCode -> List Element
parse =
    Localized.Parser.parse


parseFileName =
    "TODO"
