module Tests.Fixtures exposing (..)

import CSV.Template
import Localized exposing (..)


po : String
po =
    """msgid ""
msgstr ""
"Content-Type: text/plain; charset=UTF-8\\n"
"X-Poedit-SourceCharset: UTF-8\\n"
#. MyComment
msgid "Test.myString"
msgstr "Value"

#. Multiline
#. comment
msgid "Test.myString2"
msgstr "Value2"

#.
#. i18n: placeholders: label
msgid "Test.myFormat"
msgstr "Prefix: %(label)s"
"""


elements : List Element
elements =
    [ Localized.ElementStatic
        { meta =
            { key = "myString"
            , comment = "MyComment"
            }
        , value = "Value"
        }
    , Localized.ElementStatic
        { meta =
            { key = "myString2"
            , comment = "Multiline\ncomment"
            }
        , value = "Value2"
        }
    , Localized.ElementFormat
        { meta =
            { key = "myFormat"
            , comment = ""
            }
        , placeholders = [ "label" ]
        , components =
            [ Localized.FormatComponentStatic "Prefix: "
            , Localized.FormatComponentPlaceholder "label"
            ]
        }
    ]


csv : String
csv =
    CSV.Template.headers ++ """
"Test","myString","MyComment","","Value"
"Test","myString2","Multiline\\ncomment","","Value2"
"Test","myFormat","","label","Prefix: {{label}}"
"""


elements4 : List Element
elements4 =
    [ Localized.ElementStatic
        { meta =
            { key = "myString"
            , comment = "My comment"
            }
        , value = "Value"
        }
    , Localized.ElementFormat
        { meta =
            { key = "myFormat"
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
            { key = "myFormatAtBeginning"
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
            { key = "myFormatQuoted"
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


elements5 : List Element
elements5 =
    [ Localized.ElementStatic
        { meta =
            { key = "myString"
            , comment = ""
            }
        , value = "Value"
        }
    , Localized.ElementStatic
        { meta =
            { key = "myString2"
            , comment = ""
            }
        , value = "Value2"
        }
    , Localized.ElementStatic
        { meta =
            { key = "myStringC"
            , comment = "My comment with a-hyphen"
            }
        , value = "ValueC"
        }
    , Localized.ElementFormat
        { meta =
            { key = "myFormat"
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
            { key = "myFormat2"
            , comment = "My formatted comment"
            }
        , placeholders = [ "argument" ]
        , components =
            [ Localized.FormatComponentStatic "Newline after static: "
            , Localized.FormatComponentPlaceholder "argument"
            ]
        }
    , Localized.ElementStatic
        { meta =
            { key = "stringWithMultiLineComment"
            , comment = "My comment over two\nlines."
            }
        , value = ""
        }
    ]


elm5 : String
elm5 =
    """module Translation.Test exposing (..)

{-| -}


myString : String
myString =
    "Value"


myString2 : String
myString2 = "Value2"


{-| My comment with a-hyphen
-}
myStringC : String
myStringC =
    "ValueC"


myFormat : String -> String
myFormat label =
    "Prefix: " ++ label


{-| My formatted comment
-}
myFormat2 : String -> String
myFormat2 argument =
    "Newline after static: "
        ++ argument


{-| My comment over two
lines.
-}
stringWithMultiLineComment : String
stringWithMultiLineComment =
    ""
"""


csv4 : String
csv4 =
    CSV.Template.headers
        ++ """
"Test","myString","My comment","","Value","IGNORE"
"Test","myFormat","","label","Prefix: {{label}}"
"Test","myFormatAtBeginning","","label","{{label}} suffix","IGNORE","IGNORE"
"Test","myFormatQuoted","","label","Prefix '{{label}}' suffix"
"""


elm4 : String
elm4 =
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


moduleName : String
moduleName =
    "Test"
