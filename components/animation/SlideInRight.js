import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSizeLessThan } from '../../hooks/useWindowSize'

const SlideInRight = ({ style, children, y = 50, delay = 0, ...otherProps }) => {
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
            // y: sm ? 5 : y,
            x: 20
        },
        visible: {
            opacity: 1,
            // y: 0,
            x: 0,
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

export default SlideInRight
