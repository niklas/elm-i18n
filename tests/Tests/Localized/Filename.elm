module Tests.Localized.Filename exposing (..)

import Expect
import Localized exposing (..)
import Localized.Filename as Subject
import Test exposing (..)


suite : Test
suite =
    describe "Localized.FileName"
        [ describe ".toElm"
            [ test "converts a module name to a relative elm file path" <|
                \_ ->
                    Expect.equal "Translation/Foo/Bar/Baz.elm" (Subject.toElm "Foo.Bar.Baz")
            ]
        , describe ".toElmWithLocale"
            [ test "converts a module name to a relative elm file path" <|
                \_ ->
                    Expect.equal "Translation/Foo/Bar/Baz/EnUs.elm" (Subject.toElmWithLocale "EnUs" "Foo.Bar.Baz")
            ]
        ]
