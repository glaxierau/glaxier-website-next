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

export const generalSettings = `
  *[_type == 'generalSetting'][1]{
    "companyContent": companyContent[language->.language == $lang][0],
    companyName,
    logo{asset->},
    favicon{asset->}
  }`
export const footer = `
  *[_type == 'footer'][0]{
        footerDetail[languageOption->.language == $lang][0]
  }`