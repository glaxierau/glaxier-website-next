import { client } from '../../../hooks/getData'
import { blogs } from '../../../sanity/queries'
export default async function blogsAPI(req, res) {
    // const lang = 'en-AU'
    const lang = req.query.lang
    const result = await client.fetch(blogs, { lang })
    // console.log(req.query.lang)
    return res.send(result)
}