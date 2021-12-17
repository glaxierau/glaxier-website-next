import SanityBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { serializers } from '../../hooks/tools'
import style from '../../styles/Services.module.css'


function BlockContent({ ...otherProps }) {


    return (
        <div>
            {/* <SanityBlockContent {...otherProps} className={style.body} serializers={{ types: { block: BlockRenderer } }} /> */}
            <SanityBlockContent {...otherProps} serializers={serializers} />
        </div>
    )
}

export default BlockContent
