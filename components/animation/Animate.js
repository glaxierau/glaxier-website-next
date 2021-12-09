import React from 'react'
import { motion } from 'framer-motion'

const Animate = ({ children }) => {
    return (
        <div>
            <motion.div
                initial={{ x: -40, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -5, opacity: 0 }}
                transition={{ duration: 0.6, type: 'spring', staggerChildren: 0.3 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Animate
