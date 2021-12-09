import SanityClient from '@sanity/client'
import axios from 'axios'

export const client = SanityClient({
    projectId: process.env.projectId,
    dataset: 'production',
    apiVersion: 'v1',
    useCdn: true
})

export const getData = async (query) => {
    // ServerSideProps

    const results = await client.fetch(query)

    return results ? results : { notFound: true }
}


export const getDataInsideComp = async (query, setData, setError, setLoading) => {
    // Components
    await axios.get(`${process.env.apiUrl}${query}`)
        .then(res => setData(res.data.result))
        .catch(error => {
            setError(error)
            setLoading(true)
        })
        .finally(() => {
            setLoading ? setLoading(false) : ''
        })
}


