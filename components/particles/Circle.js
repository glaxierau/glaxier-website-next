import { motion } from 'framer-motion'
import React from 'react'
import { getRandom, secondRandom } from "../../hooks/randNum"
import SlideIn from '../animation/SlideIn'


const Circle = ({ active, title, onClick, ...otherProps }) => {
    const basicClassName = `absolute z-20 flex items-center justify-center lg:w-56 lg:h-56 w-32 h-32 rounded-full cursor-pointer ${active && 'border-2'} hover:border-2`

    const floatingVariants = {
        initial: {
            y: 0,
            x: 0
        },
        animate: {
            y: [0, getRandom(-2), getRandom(8), getRandom(-5), 0],
            x: [0, getRandom(2), getRandom(-7), getRandom(5), 0]
        },
        exit: {
            y: 0,
            x: 0
        }
    }
    return (
        <motion.div onClick={onClick} className={`${basicClassName}`} {...otherProps}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 4, delay: secondRandom(4), repeat: Infinity }}
        >
            <div onClick={onClick} className={`lg:w-48 lg:h-48 md:w-36 md:h-36 w-28 h-28 rounded-full bg-white ${active && 'bg-red'}  bg-opacity-95 hover:bg-red flex items-center justify-center px-10 ${active ? 'shadow-none' : 'shadow-around'} hover:shadow-none ${active ? 'text-white' : 'text-red'} hover:text-white transition duration-200 ease-in-out`}>
                <h2 className="lg:text-xl text-sm text-center font-bold">{title}</h2>
            </div>
        </motion.div>
    )
}

export default Circle
