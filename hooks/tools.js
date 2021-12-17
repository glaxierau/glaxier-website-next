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
            // if (/^h\d/.test(style)) {
            //     const level = style.replace(/[^\d]/g, "");
            //     return React.createElement(
            //         style,
            //         { className: `heading-${level}` },
            //         props.children
            //     );
            // }

            if (style === "blockquote") {
                return <blockquote>- {props.children}</blockquote>;
            }
            if (style === 'normal') {
                return <p className="text-base text-black-light leading-normal py-1 font-extralight">{props.children}</p>
            }
            if (style === 'h1') {
                return <h1 className="text-3xl text-black-light leading-normal py-1 font-extralight">{props.children}</h1>
            }
            if (style === 'h2') {
                return <h2 className="text-2xl text-purple leading-loose font-semibold">{props.children}</h2>
            }
            if (style === 'h3') {
                return <h3 className="text-xl text-red leading-loose font-bold">{props.children}</h3>
            }
            // if (style === 'link') {
            //     return <a className="text-base text-purple leading-loose font-bold">{props.children}</a>
            // }

            // Fall back to default handling
            return BlockContent.defaultSerializers.types.block(props);
        },
        code: (props) =>
            console.log("code block", props) || (
                <pre data-language={props.node.language}>
                    <code className="leading-normal">{props.node.code}</code>
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
        strong: (props) => <strong>{props.children}</strong>,
        em: (props) => <em>{props.children}</em>,
        code: (props) => <code>{props.children}</code>,
        link: (props) => <a className="text-base text-purple" href={props.mark.href}>{props.children}</a>,
        span: (props) => <span className="text-base text-red">{props.children}</span>,
    },

    container: ({ children }) => children

};