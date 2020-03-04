module PO.Template exposing (placeholder, placeholderCommentPrefix)


placeholder : String -> String
placeholder ph =
    "%(" ++ ph ++ ")s"


placeholderCommentPrefix : String
placeholderCommentPrefix =
    "i18n: placeholders: "
