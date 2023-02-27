import { client } from "../hooks/getData"
import { allBlogs } from "./blogQueries"
import { aboutQuery, homeQuery, servicePageQuery } from "./pagesQuery"
import { languageToUpperCase } from '../helper/functions'

export const pageStore = async (lang) => {
    const home = await client.fetch(`${homeQuery}`, { lang }).then((docs) => docs)
    const about = await client.fetch(`${aboutQuery}`, { lang }).then((docs) => docs)
    const servicePage = await client.fetch(`${servicePageQuery}`, { lang }).then((docs) => docs)
    return {
        home,
        about,
        servicePage
    }
}

export const servicesStore = async (lang) => {
    const services = await client.fetch(`*[_type == 'service' && pageInfo.lang->language == $lang ]`, { lang }).then((docs) => docs)
    return services
}

export const blogsStore = async (lang) => {
    const blogs = await client.fetch(`
    *[_type == 'articles'  
    && __i18n_lang == $lang]
        {
        _id,
        title,
        shortDescription,
        featuredImage,
        metadata,
        content,
        tags,
        slug,
        author,
        _createdAt,
        "category": articleCategory->{...category{slug}}.slug,
        status
        }`, { lang: languageToUpperCase(lang) })
    return blogs
}