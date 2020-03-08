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
                    Expect.equal elmName (Subject.toElm moduleName)
            ]
        , describe ".toElmWithLocale"
            [ test "converts a module name to a relative elm file path" <|
                \_ ->
                    Expect.equal elmNameWithLocale (Subject.toElmWithLocale locale moduleName)
            ]
        , describe ".toModuleName"
            [ test "converts a csv/po relative file name to a module name" <|
                \_ ->
                    Expect.equal moduleName (Subject.toModuleName poName)
            ]
        ]


moduleName =
    "Foo.BarBam.Baz"


elmName =
    "Translation/Foo/BarBam/Baz.elm"


elmNameWithLocale =
    "Translation/Foo/BarBam/Baz/EnUs.elm"


locale =
    "EnUs"


poName =
    "de/foo/bar_bam/baz.po"
