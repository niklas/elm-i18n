module Localized.Element exposing
    ( exportTo
    , getKey
    , importFrom
    )

import CSV.Export
import CSV.Import
import Localized exposing (..)
import PO.Export
import PO.Import


importFrom : FileFormat -> ModuleName -> SourceCode -> List Element
importFrom format =
    case format of
        CSV ->
            CSV.Import.generate

        PO ->
            PO.Import.generate


exportTo : FileFormat -> Module -> SourceCode
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


listDropRight : Int -> List a -> List a
listDropRight n =
    List.reverse << List.drop 1 << List.reverse


getKey : Element -> String
getKey element =
    case element of
        ElementFormat e ->
            e.meta.key

        ElementStatic e ->
            e.meta.key
