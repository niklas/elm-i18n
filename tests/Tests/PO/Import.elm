module Tests.PO.Import exposing (..)

import Expect
import Localized
import PO.Import as PO
import PO.Import.Internal as PO
import Test exposing (..)
import Tests.Fixtures as Fixtures


testImport : Test
testImport =
    test "testImport" <|
        \() ->
            PO.generate ( "Test", inputPO )
                |> Expect.equal { name = "Test", elements = elements, lang = "" }


testKeys : Test
testKeys =
    test "testKeys" <|
        \() ->
            PO.keys inputPO
                |> Expect.equal
                    [ ( "Test", [ "myString", "myString2", "myFormat" ] ) ]


testPlaceholders : Test
testPlaceholders =
    test "testPlaceholders" <|
        \() ->
            [ PO.placeholdersInValue "Prefix %(placeholder)s"
            , PO.placeholdersInValue "Prefix %(placeholder)"
            , PO.placeholdersInValue "%(some)s"
            ]
                |> Expect.equal
                    [ [ "placeholder" ]
                    , []
                    , [ "some" ]
                    ]


testPlaceholdersFromComment : Test
testPlaceholdersFromComment =
    test "testPlaceholdersFromComment" <|
        \() ->
            [ PO.placeholdersFromPoComment "#.\n#. i18n: placeholders: label"
            , PO.placeholdersFromPoComment "#. My Comment"
            ]
                |> Expect.equal
                    [ [ "label" ]
                    , []
                    ]


elements : List Localized.Element
elements =
    Fixtures.elements


inputPO : String
inputPO =
    Fixtures.po
