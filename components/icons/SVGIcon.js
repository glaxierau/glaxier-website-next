import { motion } from 'framer-motion'
import React from 'react'
import Img from 'next/image'

function SVGIcon({ src }) {
    return (
        <motion.div className="flex items-center justify-start h-full">
            <Img src={src} alt="email" width={40} height={40} objectFit="contain" />
        </motion.div>
    )
}

export default SVGIcon
