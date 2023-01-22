import { client } from '../../hooks/getData'

export default async function handler(req, res) {

  const language = req.query.lang

  const navList = await client.fetch(`*[ _type == "menu" ]{
        _id,
        languages[ languageOption->.language == $language][0]{
          "title":title,
          languageOption->{
          "language":language,
            }
        },
        subMenu[]->{
            languages[languageOption->.language == $language][0]{
            "title":title,
            languageOption->{
            "language":language,
            "_id":_id
            }
        },
            "slug":slug.current,
        },
        "slug": slug.current
      }`, { language })


  res.send(navList)
}