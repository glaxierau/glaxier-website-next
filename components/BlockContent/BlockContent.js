import SanityBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import style from '../../styles/Services.module.css'


function BlockContent(props) {

    const {
        normalColor = 'text-black-light',
        custom = [{ type: 'normal', className: 'text-white' }],
        ...otherProps
    } = props

    const serializers = {
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
                custom.map(c => {
                    if (style === c.type) {
                        return React.createElement(
                            style,
                            c.className,
                            props.children
                        );
                    }
                });

                if (style === 'normal') {
                    return <p className={`lg:text-base ${normalColor} leading-relaxed py-1 font-extralight`}>{props.children}</p>
                }
                if (style === 'h1') {
                    return <h1 className="text-3xl text-black-light leading-normal py-1 font-extralight">{props.children}</h1>
                }
                if (style === 'h2') {
                    return <h2 className="text-2xl text-purple leading-[3] font-semibold">{props.children}</h2>
                }
                if (style === 'h3') {
                    return <h3 className="text-xl text-red leading-[3] font-bold">{props.children}</h3>
                }

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

    return (
        <div>
            <SanityBlockContent {...otherProps} serializers={serializers} />
        </div>
    )
}

export default BlockContent
