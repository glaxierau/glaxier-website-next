import SanityClient from '@sanity/client'

export const services = async (req, res) => {
    const client = SanityClient({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        dataset: 'services',
        apiVersion: 'v1',
        useCdn: false,
    })
    const query = `*[_type == 'services]`
    const results = await client.fetch(query)
    res.status(200).json(results)
}
