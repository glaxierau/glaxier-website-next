import SanityBlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import style from '../../styles/Services.module.css'
import { urlFor } from '../../hooks/tools'
import Image from 'next/image'
import FsLightbox from 'fslightbox-react'
import { trimFunction } from '../../helper/functions'

function BlockContent(props) {
    const {
        normalColor = 'text-black-light',
        custom = [{ type: 'normal', className: 'text-white' }],
        shortenChar = false,
        blocks,
        ...otherProps
    } = props

    const serializers = {
        types: {
            block: (props) => {
                const { style = 'normal' } = props.node
                custom.map((c) => {
                    if (style === c.type) {
                        return React.createElement(
                            style,
                            c.className,
                            props.children
                        )
                    }
                })

                if (style === 'span') {
                    return (
                        <p
                            className={`text-base ${normalColor} leading-relaxed py-1 font-extralight`}
                        >
                            {shortenChar
                                ? trimFunction(props.children[0], shortenChar)
                                : props.children}
                        </p>
                    )
                }
                if (style === 'normal') {
                    return (
                        <p
                            className={`text-base ${normalColor} leading-relaxed py-1 font-extralight`}
                        >
                            {shortenChar
                                ? trimFunction(props?.children[0], shortenChar)
                                : props.children}
                        </p>
                    )
                }
                if (style === 'h1') {
                    return (
                        <h1 className="text-3xl text-black-light leading-normal py-1 font-extralight">
                            {props.children}
                        </h1>
                    )
                }
                if (style === 'h2') {
                    return (
                        <h2 className="text-2xl text-purple leading-[1.5] font-semibold py-2">
                            {props.children}
                        </h2>
                    )
                }
                if (style === 'h3') {
                    return (
                        <h3 className="text-xl text-purple leading-[1.5] font-bold py-2">
                            {props.children}
                        </h3>
                    )
                }
                if (style === 'h4') {
                    return (
                        <h4 className="text-xl text-purple leading-[1.5] font-bold py-2">
                            {props.children}
                        </h4>
                    )
                }

                // Fall back to default handling
                return BlockContent.defaultSerializers.types.block(props)
            },
            code: (props) =>
                console.log('code block', props) || (
                    <pre data-language={props.node.language}>
                        <code className="leading-normal">
                            {props.node.code}
                        </code>
                    </pre>
                ),
            singleImage: SingleImage,
        },
        list: (props) =>
            // console.log("list", props) ||
            props.type === 'bullet' ? (
                <ul className="list-disc ml-8">{props.children}</ul>
            ) : (
                <ol className="list-decimal ml-8">{props.children}</ol>
            ),
        listItem: (props) =>
            // console.log("list", props) ||
            props.type === 'bullet' ? (
                <li
                    className={`text-base ${normalColor} leading-relaxed py-1 font-extralight`}
                >
                    {props.children}
                </li>
            ) : (
                <li
                    className={`text-base ${normalColor} leading-relaxed py-1 font-extralight`}
                >
                    {props.children}
                </li>
            ),
        marks: {
            strong: (props) => <strong>{props.children}</strong>,
            em: (props) => <em>{props.children}</em>,
            code: (props) => <code>{props.children}</code>,
            link: (props) => (
                <a className="text-base text-purple" href={props.mark.href}>
                    {props.children}
                </a>
            ),
            span: (props) => (
                <span className="text-base text-red">{props.children}</span>
            ),
        },
        container: ({ children }) => children,
    }

    return (
        <div>
            <SanityBlockContent
                {...otherProps}
                serializers={serializers}
                blocks={blocks}
            />
        </div>
    )
}

const SingleImage = ({ node: { image } }) => {
    const [toggler, setToggler] = useState(false)
    return (
        <div className="relative w-full h-[350px] my-10">
            <Image
                src={urlFor(image).url()}
                className="object-contain bg-no-repeat rounded-lg cursor-pointer"
                layout="fill"
                format="auto"
                fit="max"
                alt={image.alt || ''}
                title={image.title || ''}
                onClick={() => setToggler(!toggler)}
            />
            <FsLightbox
                toggler={toggler}
                sources={[urlFor(image).height(800).url()]}
            />
        </div>
    )
}

export default BlockContent
