import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ScaleIn = ({ style, children, ...otherProps }) => {
    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold: 0.6 })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }

    }, [controls, inView])

    const animationVariants = {
        hidden: { opacity: 0, scale: 50 },
        visible: {
            opacity: 1,
            scale: 0,
            transition: { duration: 1, type: 'spring', stiffness: '60', staggerChildren: 0.5 }
        },

    }
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            viewport={{ once: true }}
            animate={controls}
            variants={animationVariants}
            {...otherProps}
        >
            {children}
        </motion.div>
    )
}

export default ScaleIn
