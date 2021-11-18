import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Animate = ({ children, key }) => {
    return (
        <div>
            <motion.div
                key={key.route}
                initial={{ y: 5, opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Animate
