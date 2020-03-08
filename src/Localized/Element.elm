module Localized.Element exposing
    ( exportTo
    , importFrom
    , removeLang
    )

import CSV.Export
import CSV.Import
import Localized exposing (..)
import PO.Export
import PO.Import


importFrom : FileFormat -> ( ModuleName, SourceCode ) -> Module
importFrom format =
    case format of
        CSV ->
            CSV.Import.generate

        PO ->
            PO.Import.generate


exportTo : FileFormat -> List Element -> SourceCode
exportTo format =
    case format of
        CSV ->
            CSV.Export.generate

        PO ->
            PO.Export.generate


updateMeta : (Meta -> Meta) -> Element -> Element
updateMeta fun element =
    case element of
        ElementStatic e ->
            ElementStatic { e | meta = fun e.meta }

        ElementFormat e ->
            ElementFormat { e | meta = fun e.meta }


{-| Removes a locale "En" from a module name like "Area.Foo.En"
-}
removeLang : Element -> Element
removeLang =
    updateMeta
        (\meta ->
            let
                newName =
                    meta.moduleName
                        |> String.split "."
                        |> listDropRight 1
                        |> String.join "."
            in
            { meta | moduleName = newName }
        )


listDropRight : Int -> List a -> List a
listDropRight n =
    List.reverse << List.drop 1 << List.reverse
