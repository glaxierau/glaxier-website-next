import React from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from './getData'
import BlockContent from '@sanity/block-content-to-react'
import { sanitize } from '../utils/miscellanous'

export const sanityImage = (image, customSize = true) => {
    const value = useNextSanityImage(client, image)
    if (customSize) {
        delete value.width
        delete value.height
    }
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

export const capitalizeFirstLetter = (str) => {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

export const childrenOf = (array, index) => {
    const newArray = array[index].children[0].text
    return newArray
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const getMessage = (message) => {
    if (!message) {
        return null;
    }
    const result = message?.split('-') ?? null;
    if ("0" !== result?.[0]?.trim()) {
        return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
}