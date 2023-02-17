import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSizeLessThan } from '../../hooks/useWindowSize'

const ScaleIn = ({ style, children, y = 50, delay = 0.5, ...otherProps }) => {
    const controls = useAnimation()
    const sm = useSizeLessThan(600)
    const { ref, inView } = useInView({ threshold: sm ? 0.2 : 0.2 })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const animationVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
                // damping: 5,
                bounceDamping: 4,
                delay,
            },
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
