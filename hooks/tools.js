import React from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from './getData'
import BlockContent from '@sanity/block-content-to-react'

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


//---------------- SERIALIZERS ----------------------

export const BlockRenderer = (props) => {
    const { style = 'normal' } = props.node

    if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '')
        return React.createElement(style, { className: `heading-${level}` }, props.children)
    }

    if (style === 'blockquote') {
        return <blockquote>- {props.children}</blockquote>
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
}


export const serializers = {
    types: {
        block: (props) => {
            const { style = "normal" } = props.node;

            if (/^h\d/.test(style)) {
                const level = style.replace(/[^\d]/g, "");
                return React.createElement(
                    style,
                    { className: `heading-${level}` },
                    props.children
                );
            }

            if (style === "blockquote") {
                return <blockquote>- {props.children}</blockquote>;
            }

            // Fall back to default handling
            return BlockContent.defaultSerializers.types.block(props);
        },
        code: (props) =>
            console.log("code block", props) || (
                <pre data-language={props.node.language}>
                    <code className=" leading-normal">{props.node.code}</code>
                </pre>
            )
    },
    list: (props) =>
        console.log("list", props) ||
        (props.type === "bullet" ? (
            <ul>{props.children}</ul>
        ) : (
            <ol>{props.children}</ol>
        )),
    listItem: (props) =>
        console.log("list", props) ||
        (props.type === "bullet" ? (
            <li>{props.children}</li>
        ) : (
            <li>{props.children}</li>
        )),
    marks: {
        strong: (props) =>
            console.log("strong", props) || <strong>{props.children}</strong>,
        em: (props) => console.log("em", props) || <em>{props.children}</em>,
        code: (props) => console.log("code", props) || <code>{props.children}</code>
    },

    container: ({ children }) => children

};