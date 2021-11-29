import { motion } from "framer-motion"
import { getRandom, secondRandom } from "../../hooks/randNum"

const SmCircle = ({ size, ...otherProps }) => {
    const floatingVariants = {
        animate: {
            y: [0, getRandom(2), getRandom(10), getRandom(-5), 0],
            x: [0, getRandom(1), getRandom(2), getRandom(1), 0],
        },
    }
    return (
        <motion.div
            className={`absolute z-20 bg-white rounded-full h-${size} w-${size}`} {...otherProps}
            variants={floatingVariants}
            animate="animate"
            transition={{ duration: 4, delay: secondRandom(4), repeat: Infinity }}

        >
        </motion.div>
    )
}

export default SmCircle
