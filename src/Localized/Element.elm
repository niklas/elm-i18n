module Localized.Element exposing
    ( exportTo
    , importFrom
    , isEqual
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


isEqual : Element -> Element -> Bool
isEqual e1 e2 =
    case ( e1, e2 ) of
        ( Localized.ElementFormat _, Localized.ElementStatic _ ) ->
            False

        ( Localized.ElementStatic _, Localized.ElementFormat _ ) ->
            False

        ( Localized.ElementStatic m1, Localized.ElementStatic m2 ) ->
            m1.meta.key == m2.meta.key

        ( Localized.ElementFormat m1, Localized.ElementFormat m2 ) ->
            m1.meta.key == m2.meta.key
