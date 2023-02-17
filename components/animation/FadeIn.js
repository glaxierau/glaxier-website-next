import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSizeLessThan } from '../../hooks/useWindowSize'

const FadeIn = ({ style, children, y = 50, delay = 0.5, scale = false, ...otherProps }) => {
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
            scale: scale ? 0 : 1
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0, 0.71, 0.2, 1.01],
                duration: 0.8,
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

export default FadeIn
