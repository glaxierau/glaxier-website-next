
import { getData } from '../../../hooks/getData'
import SanityClient from '@sanity/client'

export const services = async (req, res) => {
    const client = SanityClient({
        projectId: 'a49e7mel',
        dataset: 'services',
        apiVersion: 'v1',
        useCdn: false
    })
    const query = `*[_type == 'services]`
    const results = await client.fetch(query)
    // const results = await getData(query)
    // res.send(result)
    res.status(200).json(results)
}