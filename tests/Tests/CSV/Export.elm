module Tests.CSV.Export exposing (..)

import CSV.Export as CSV
import Expect
import Localized
import Test exposing (..)
import Tests.Fixtures as Fixtures


testExport : Test
testExport =
    test "testExport" <|
        \() ->
            CSV.generate { name = "Test", lang = "---", elements = elements }
                |> Expect.equal expectedCSV


elements : List Localized.Element
elements =
    Fixtures.elements


expectedCSV : String
expectedCSV =
    Fixtures.csv
