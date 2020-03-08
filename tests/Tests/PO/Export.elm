module Tests.PO.Export exposing (..)

import Expect
import Localized
import PO.Export as PO
import Test exposing (..)
import Tests.Fixtures as Fixtures


testExport : Test
testExport =
    test "testExport" <|
        \() ->
            PO.generate elements
                |> Expect.equal expectedPO


elements : List Localized.Element
elements =
    Fixtures.elements


expectedPO : String
expectedPO =
    Fixtures.po
