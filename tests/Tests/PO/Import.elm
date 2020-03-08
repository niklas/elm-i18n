module Tests.PO.Import exposing (..)

import Expect
import Localized
import PO.Import as PO
import PO.Import.Internal as PO
import Test exposing (..)


testImport : Test
testImport =
    test "testImport" <|
        \() ->
            PO.generate ( "Test", inputPO )
                |> Expect.equal ( "Test", elements )


testKeys : Test
testKeys =
    test "testKeys" <|
        \() ->
            PO.keys inputPO
                |> Expect.equal
                    [ ( "Test", [ "myString", "myFormat" ] ) ]


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
    [ Localized.ElementStatic
        { meta =
            { moduleName = "Test"
            , key = "myString"
            , comment = "MyComment"
            }
        , value = "Value"
        }
    , Localized.ElementFormat
        { meta =
            { moduleName = "Test"
            , key = "myFormat"
            , comment = ""
            }
        , placeholders = [ "label" ]
        , components =
            [ Localized.FormatComponentStatic "Prefix: "
            , Localized.FormatComponentPlaceholder "label"
            ]
        }
    ]


inputPO : String
inputPO =
    """msgid ""
msgstr ""
"Content-Type: text/plain; charset=UTF-8\\n"
"X-Poedit-SourceCharset: UTF-8\\n"
#. MyComment
msgid "Test.myString"
msgstr "Value"

#.
#. i18n: placeholders: label
msgid "Test.myFormat"
msgstr "Prefix: %(label)s"
"""
