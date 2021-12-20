

export default async function handler(req, res) {
    const { query } = req.query
    console.log(query)
    return res.status(200).json('hello')
}

