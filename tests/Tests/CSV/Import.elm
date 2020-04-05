module Tests.CSV.Import exposing (..)

import CSV.Export as Export
import CSV.Import as CSV
import CSV.Template
import Expect
import Localized
import Localized.Parser as Localized
import Localized.Writer as Writer
import Test exposing (..)
import Tests.Fixtures as Fixtures


testGenerate : Test
testGenerate =
    test "testGenerate" <|
        \() ->
            CSV.generate ( "Test", inputCSV )
                |> Expect.equal (Localized.buildModule "Test" elements)


testImport : Test
testImport =
    test "testImport" <|
        \() ->
            CSV.generate ( "Test", inputCSV )
                |> Writer.generate
                |> Expect.equal ( "Test", expectedSource )


testFullCircle : Test
testFullCircle =
    test "testFullCircle" <|
        \() ->
            Localized.parse expectedSource
                |> Export.generate
                |> (CSV.generate << Tuple.pair "Test")
                |> Writer.generate
                |> Expect.equal ( "Test", expectedSource )


inputCSV : String
inputCSV =
    Fixtures.csv4


expectedSource : String
expectedSource =
    Fixtures.elm4


elements : List Localized.Element
elements =
    Fixtures.elements4
