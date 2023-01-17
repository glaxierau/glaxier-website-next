import { client } from '../../../hooks/getData'
import { allBlogs, blogs } from '../../../sanity/queries'
export default async function blogsAPI(req, res) {
    const lang = req.query.lang
    const page = +req.query.page
    const lIndex = page * 9
    const fIndex = page === 1 ? 0 : lIndex - 9
    const blogsToShow = await client.fetch(blogs, { lang, fIndex, lIndex })
    const blogList = await client.fetch(allBlogs, { lang })
    const result = {
        blogsToShow,
        blogList
    }
    return res.send(result)
}