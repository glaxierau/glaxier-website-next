import SanityBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import style from '../../styles/Services.module.css'

function BlockContent({ ...otherProps }) {

    return (
        <div>
            <SanityBlockContent {...otherProps} className={style.body} />
        </div>
    )
}

export default BlockContent
