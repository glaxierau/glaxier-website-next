import { client } from "../hooks/getData"
import { aboutQuery, homeQuery, servicePageQuery } from "./pagesQuery"

export const pageStore = async (lang) => {
    const home = await client.fetch(`${homeQuery}`, { lang }).then((docs) => docs)
    const about = await client.fetch(`${aboutQuery}`, { lang }).then((docs) => docs)
    const servicePage = await client.fetch(`${servicePageQuery}`, { lang }).then((docs) => docs)
    return {
        home: JSON.stringify(home),
        about: JSON.stringify(about),
        servicePage: JSON.stringify(servicePage)
    }
}