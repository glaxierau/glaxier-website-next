import { useNextSanityImage } from 'next-sanity-image'
import { client } from './getData'

export const sanityImage = (image) => {
    const value = useNextSanityImage(client, image)
    delete value.width
    delete value.height
    return value
}

export const shortenText = (text, lenght = 160) => {
    const trimedTxt = text.substr(0, lenght) + '...'
    return trimedTxt
}
export const upperCaseText = (text) => {
    const trimedTxt = text.toUpperCase()
    return trimedTxt
}