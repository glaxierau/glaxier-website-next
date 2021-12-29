import { motion } from 'framer-motion'
import React from 'react'
import { getMessage } from '../../hooks/tools'

const InputAlert = ({ message = 'alert', error, status, isOpen }) => {
    const count = message?.length
    return (
        <div>
            {status === 'error' &&
                <motion.div className={`absolute ${count >= 60 ? '-bottom-16' : '-bottom-10'} right-0 z-50 w-auto bg-white text-gray-600 text-center rounded-full outline outline-1 outline-yellow-400 p-2`}
                    animate={isOpen ? { opacity: 1, y: 0, display: 'grid' } : { opacity: 0, y: -5, display: ['grid', 'none'] }}
                    transition={{ duration: 0.2, stiffness: '40' }}>
                    <span className='text-yellow-600 text-center' style={{ fontSize: 12 }}>{getMessage(message)}</span>
                </motion.div>}
        </div>
    )
}

export default InputAlert
