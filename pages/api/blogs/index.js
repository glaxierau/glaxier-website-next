import { client } from '../../../hooks/getData'
import { allBlogs, blogs, blogsWithTags } from '../../../sanity/blogQueries'
export default async function blogsAPI(req, res) {
    const lang = req.query.lang
    const tag = req.query.tag || ''
    const page = +req.query.page
    const lIndex = page * 9
    const fIndex = page === 1 ? 0 : lIndex - 9
    const blogsToShow = await client.fetch(tag !== 'undefined' ? blogsWithTags : blogs, { lang, fIndex, lIndex, tag })
    const result = {
        blogsToShow,
    }
    return res.send(result)
}