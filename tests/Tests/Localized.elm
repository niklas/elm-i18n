module Tests.Localized exposing (..)

import Expect
import Localized
import Localized.Parser as Parser
import Localized.Parser.Internal as Parser
import Test exposing (..)
import Tests.Fixtures as Fixtures


testParse : Test
testParse =
    test "testParse" <|
        \() ->
            Parser.parse sourceString
                |> Expect.equal expected


testStringDeclarations : Test
testStringDeclarations =
    test "testStringDeclarations" <|
        \() ->
            Parser.stringDeclarations sourceString
                |> Expect.equal
                    [ ( "myString", [] )
                    , ( "myString2", [] )
                    , ( "myStringC", [] )
                    , ( "myFormat", [ "String" ] )
                    , ( "myFormat2", [ "String" ] )
                    , ( "stringWithMultiLineComment", [] )
                    ]


expected : List Localized.Element
expected =
    Fixtures.elements5


sourceString : String
sourceString =
    Fixtures.elm5
