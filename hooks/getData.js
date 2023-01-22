import SanityClient from '@sanity/client'

export const client = SanityClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
})

export const getData = async (query) => {
    const results = await client.fetch(query)
    return results ? results : { notFound: true }
}


