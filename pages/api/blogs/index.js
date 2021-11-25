import articles from '../../../config/articles'
export default function blogs(req, res) {
    res.status(200).json(articles)
}