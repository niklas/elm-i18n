module Localized.Module exposing (toCSV, toElm, toPO)

import CSV.Export
import Localized.Writer
import PO.Export


toPO =
    PO.Export.generate


toCSV =
    CSV.Export.generate


toElm =
    Localized.Writer.generate
