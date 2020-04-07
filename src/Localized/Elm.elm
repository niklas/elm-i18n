module Localized.Elm exposing (parse, parseFileName, write)

import Localized exposing (..)
import Localized.Parser as Parser
import Localized.Writer as Writer


parse : SourceCode -> List Element
parse =
    Parser.parse


write =
    Writer.generate


parseFileName =
    "TODO"
