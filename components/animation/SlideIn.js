import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SlideIn = ({ style, children, y = 50, delay = 0.2, ...otherProps }) => {
    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }

    }, [controls, inView])

    const animationVariants = {
        hidden: { opacity: 0, y: y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: 'spring', stiffness: '60', staggerChildren: 0.5, delay: 0.0 + delay }
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

export default SlideIn
