import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { getMessage } from '../../hooks/tools'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const InputAlert = ({ message = 'alert', error, status, isOpen }) => {
    const count = message?.length
    const [lessCount, setLessCount] = useState(false)
    const sm = withSizeLessThan(600)

    useEffect(() => {
        if (count >= 90) {
            setLessCount(false)
        } else {
            setLessCount(true)
        }
    }, [message])
    return (
        <div>
            {status === 'error' &&
                <motion.div className={`absolute -bottom-12 flex flex-col justify-center items-center right-0 z-10 w-auto h-10 bg-white text-gray-600 text-center rounded-full outline outline-1 p-2 overflow-y-scroll scroll-p-0 ${!sm ? 'outline-yellow-400' : 'outline-none'}`}
                    animate={isOpen ? { opacity: 1, y: 0, display: 'flex' } : { opacity: 0, y: -5, display: ['flex', 'none'] }}
                    transition={{ duration: 0.2, stiffness: '40' }}>
                    {
                        lessCount ? <span className='text-yellow-600 text-center' style={{ fontSize: 12 }}>{getMessage(message)}</span> :
                            <span dangerouslySetInnerHTML={{ __html: message }} className='text-yellow-600 text-center text-xs grid place-content-center' />
                    }

                </motion.div>}
        </div>
    )
}

export default InputAlert
