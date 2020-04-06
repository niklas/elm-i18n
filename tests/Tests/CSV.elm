module Tests.CSV exposing (..)

import CSV.Export as Export
import Expect
import Localized exposing (..)
import Localized.CSV as CSV
import Test exposing (..)
import Tests.Fixtures as Fixtures


testParse : Test
testParse =
    test "testParse" <|
        \() ->
            CSV.parse "Test" inputCSV
                |> Expect.equal elements


testImport : Test
testImport =
    todo "testImport"



-- test "testImport" <|
--     \() ->
--         CSV.generate "Test" inputCSV
--             |> Writer.generate
--             |> Expect.equal ( "Test", expectedSource )


testFullCircle : Test
testFullCircle =
    todo "testFullCircle"



-- test "testFullCircle" <|
--     \() ->
--         Localized.parse expectedSource
--             |> Export.generate
--             |> (CSV.generate << Tuple.pair "Test")
--             |> Writer.generate
--             |> Expect.equal ( "Test", expectedSource )


inputCSV : String
inputCSV =
    Fixtures.csv4


expectedSource : String
expectedSource =
    Fixtures.elm4


elements : List Element
elements =
    Fixtures.elements4
