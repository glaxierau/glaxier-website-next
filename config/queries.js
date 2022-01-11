export const navListQuery = `*[ _type == "menu" ]{
    menuName,
    _id,
    languages[ languageOption->.language == $lang][0]{
      "title":title,
      languageOption->{
      "language":language,
        }
    },
    subMenu[]->{
        languages[languageOption->.language == $lang][0]{
        "title":title,
        languageOption->{
        "language":language,
        "_id":_id
        }
    },
        "slug":slug.current,
    },
    "slug": slug.current
  }`