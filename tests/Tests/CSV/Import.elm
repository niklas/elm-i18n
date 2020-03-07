module Tests.CSV.Import exposing (..)

import CSV.Export as Export
import CSV.Import as CSV
import CSV.Template
import Expect
import Localized
import Localized.Parser as Localized
import Localized.Writer as Writer
import Test exposing (..)


testGenerate : Test
testGenerate =
    test "testGenerate" <|
        \() ->
            CSV.generate inputCSV
                |> Expect.equal [ ( "Test", elements ) ]


testImport : Test
testImport =
    test "testImport" <|
        \() ->
            CSV.generate inputCSV
                |> Writer.generate
                |> Expect.equal [ ( "Test", expectedSource ) ]


testFullCircle : Test
testFullCircle =
    test "testFullCircle" <|
        \() ->
            Localized.parse expectedSource
                |> Export.generate
                |> CSV.generate
                |> Writer.generate
                |> Expect.equal [ ( "Test", expectedSource ) ]


inputCSV : String
inputCSV =
    CSV.Template.headers
        ++ """
"Test","myString","My comment","","Value","IGNORE"
"Test","myFormat","","label","Prefix: {{label}}"
"Test","myFormatAtBeginning","","label","{{label}} suffix","IGNORE","IGNORE"
"Test","myFormatQuoted","","label","Prefix '{{label}}' suffix"
"""


expectedSource : String
expectedSource =
    """module Translation.Test exposing (..)

{-| -}


{-| My comment
-}
myString : String
myString =
    "Value"


myFormat : String -> String
myFormat label =
    "Prefix: "
        ++ label


myFormatAtBeginning : String -> String
myFormatAtBeginning label =
    label
        ++ " suffix"


myFormatQuoted : String -> String
myFormatQuoted label =
    "Prefix '"
        ++ label
        ++ "' suffix"
"""


elements : List Localized.Element
elements =
    [ Localized.ElementStatic
        { meta =
            { moduleName = "Test"
            , key = "myString"
            , comment = "My comment"
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
    , Localized.ElementFormat
        { meta =
            { moduleName = "Test"
            , key = "myFormatAtBeginning"
            , comment = ""
            }
        , placeholders = [ "label" ]
        , components =
            [ Localized.FormatComponentPlaceholder "label"
            , Localized.FormatComponentStatic " suffix"
            ]
        }
    , Localized.ElementFormat
        { meta =
            { moduleName = "Test"
            , key = "myFormatQuoted"
            , comment = ""
            }
        , placeholders = [ "label" ]
        , components =
            [ Localized.FormatComponentStatic "Prefix '"
            , Localized.FormatComponentPlaceholder "label"
            , Localized.FormatComponentStatic "' suffix"
            ]
        }
    ]
