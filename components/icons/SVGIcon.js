import { motion } from 'framer-motion'
import React from 'react'

function SVGIcon({ src, label }) {
    return (
        <motion.div className="flex items-center justify-start h-full">
            <img src={src} className="" alt="email" />
            {/* <a className="ml-6">{label}</a> */}
        </motion.div>
    )
}

export default SVGIcon
