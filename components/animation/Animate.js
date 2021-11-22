import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Animate = ({ children, type = "open" }) => {
    return (
        <div>
            <motion.div
                initial={{ height: '0vh', opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ y: '0px', opacity: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Animate
