import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Animate = ({ children, type = "open" }) => {
    return (
        <div>
            <motion.div
                initial={{ x: -40, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -5, opacity: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Animate
