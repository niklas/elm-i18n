module Tests.PO.Export exposing (..)

import Expect
import Localized
import PO.Export as PO
import Test exposing (..)


testExport : Test
testExport =
    test "testExport" <|
        \() ->
            PO.generate elements
                |> Expect.equal expectedPO


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
    , Localized.ElementStatic
        { meta =
            { moduleName = "Second"
            , key = "myString"
            , comment = "Multiline\ncomment"
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


expectedPO : String
expectedPO =
    """msgid ""
msgstr ""
"Content-Type: text/plain; charset=UTF-8\\n"
"X-Poedit-SourceCharset: UTF-8\\n"
#. MyComment
msgid "Test.myString"
msgstr "Value"

#. Multiline
#. comment
msgid "Second.myString"
msgstr "Value"

#.
#. i18n: placeholders: label
msgid "Test.myFormat"
msgstr "Prefix: %(label)s"
"""
