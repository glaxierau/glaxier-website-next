import { useNextSanityImage } from 'next-sanity-image'
import { client } from './getData'

export const sanityImage = (image) => {
    const value = useNextSanityImage(client, image)
    return value
}
