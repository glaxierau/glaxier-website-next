export default (req, res) => {
    const { type } = req.query
    console.log(type)
    return res.status(200).json({ data: `${type}` })
}