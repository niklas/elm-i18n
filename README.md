# i18n localization for Elm

[![Travis](https://travis-ci.org/niklas/elm-i18n.svg?branch=master)](https://travis-ci.org/niklas/elm-i18n)

elm-i18n provides tools and a concept for localizing elm apps. The idea is to
treat localized text as constants (or functions). To achieve this, localized
content is placed in separate modules. Each language can consist of
multiple modules, but each module contains only one language.

The elm-package is aimed at tool developers who want to parse elm-code into
localized elements, read or write CSV or PO files. **If you want to use this
tool for your elm-project you only need the information in this README.**

This is a fork from [iosphere](https://github.com/iosphere/elm-i18n) which took
a different approach: Instead of providing all translation on runtime, you'd
build an app for each of your locales, switching between them at build-time
using symlinks. It does not seem to be maintained anymore, and the author did
not want to switch paradigms at that time.

## Features:

* Switch languages:
    * Switch the language of your elm app at runtime
*   `CSV <-> ELM <-> PO`
    * Generate **CSV** and **PO** files from your localization module's elm code
    * Generate your localization module's elm code from CSV and PO files



## Suggested project file structure

Note that the language identifier is included in the directory name and in the
Translation module names:

```
project
└── src/
    ├── Main.elm (e.g. imports Translation.Main)
    ├── View.elm (e.g. imports Translation.View)
    ├── Translation.elm (contains the available languages as Type)
    └── Translation/ (contains a file and directory for each section)
        ├── Main/
        │   ├── De.elm (module Translation.Main.De)
        │   └── En.elm (module Translation.Main.En)
        ├── View/
        │   ├── De.elm (module Translation.View.De)
        │   └── En.elm (module Translation.View.En)
        ├── Main.elm (module Translation.Main -- must pass the current locale)
        └── View.elm (module Translation.View -- as first argument to all functions)
```

## Installation:

The tool-set is available as a node package and is backed by elm code:

`yarn add https://github.com/niklas/elm-i18n.git`


## Codegen tools

This repository provides a few tools to extract string functions and constants
from modules containing translations (where one language can consist of multiple
modules, but each module only contains one language).

### CSV

#### Export: Generate CSV from Elm source

```bash
elm-i18n-generator --format CSV --root your/app/src/Translation/ --language De --export --exportOutput i18n/
```

Result:

```csv
Module,Key,Comment,Supported Placeholders,Translation
"Translation.Main","greeting","A short greeting.","","Hi"
"Translation.Main","greetingWithName","A personalized greeting. Use placeholder name for the user's name.","name","Guten Tag, {{name}}"
```

#### Import: Generate Elm source code from CSV

```bash
elm-i18n-generator --format CSV -l De --import i18n/ --importOutput you/app/src
```

Result in `your/app/src/Translation/Main/De.elm`:

```elm
module Translation.Main.De exposing (..)

{-| -}


{-| A short greeting.
-}
greeting : String
greeting =
    "Hi"


{-| A personalized greeting. Use placeholder name for the user's name.
-}
greetingWithName : String -> String
greetingWithName name =
    "Guten Tag, "
        ++ name
```

And a switching file `your/app/src/Translation/Main.elm`:

```elm
module Translation.Main exposing (..)

import Translation exposing (..)
import Translation.Main.De

greeting : Language -> String
greeting language =
    case language of
        De -> Translation.Main.De.greeting

greetingWithName : Language -> String -> String
greetingWithName language =
    case language of
        De -> Translation.Main.De.greetingWithName
```

### PO

For more information about the PO file format visit:
https://www.gnu.org/savannah-checkouts/gnu/gettext/manual/html_node/PO-Files.html

*CAVEAT* every PO file as to end with two newlines (one complete empty line). If they don't, the last entry's value won't be found.

#### Export: Generate PO from Elm source:

```bash
elm-i18n-generator --format PO --root your/app/src/Translation/ --language De --export --exportOutput i18n/
```

Result:

```po
#. A short greeting.
msgid "Translation.Main.greeting"
msgstr "Hi"

#. A personalized greeting. Use placeholder name for the user's name.
#. i18n: placeholders: name
msgid "Translation.Main.greetingWithName"
msgstr "Guten Tag, %(name)s"
```

#### Import: Generate Elm source code from PO

```bash
elm-i18n-generator --format PO -l De --import i18n/ --importOutput you/app/src
```

Results in the same `import/Translation/Main/De.elm`
as in the [CSV example](#import-generate-elm-source-code-from-csv).


#### Generate Elm source for switching Language during run-time

Pass all the languages you want to switch between as a comma-separated list.

```bash
elm-i18n-generator --language De,Pl,En,Fr
```

Use the `Language` type to dynamically translate your websites:


```
import Translation exposing (Language(..))
import Translation.Main as T

state =
    { language = Language
    }

render state =
    div []
        [ text (T.greetingWithName state.language "Leonard")
        , text "and in German:"
        , text (T.greetingWithName De "Leonard")
        ]
```

## Advantages

+ Switch the app's locale on the fly
+ You can use any logic you like for the text snippets: constants, functions...
+ Allows you to create sub modules for parts of your app.
+ Full type safety
+ Auto completion (if you run the script at least once before starting the IDE).
+ For testing you can add a Translation `Test` and set your code base to use
  that before running tests. This way your tests do not change if you change the
  wording of your buttons, labels and fallbacks.
+ Compile-time errors for incomplete translations.
+ Compile-time errors are limited to the incomplete language, so you can
  continue shipping updates and fixes for the other languages.
+ Get started with a new language quickly by exporting all strings for
  an existing language, replacing all value in the CSV with "TODO" and then
  import the CSV for the new language, which will create all `Translation`
  modules.

## Disadvantages

- Bigger footprint of your app, containing constants for all available languages

## Building elm-i18n

The tool is built using node.js with an Elm-Core.
To build the elm backend of the node.js part (if developing locally):
`make dist`.
