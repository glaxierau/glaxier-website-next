import { motion } from "framer-motion"
import { getRandom, secondRandom } from "../../hooks/randNum"

const SmCircle = ({ size, style, ...otherProps }) => {
    const floatingVariants = {
        animate: {
            y: [0, getRandom(2), getRandom(10), getRandom(-5), getRandom(10), 0],
            x: [0, getRandom(1), getRandom(10), getRandom(10), getRandom(2), 0],
        },
    }
    return (
        <motion.div
            className={`absolute z-50 bg-white rounded-full`} {...otherProps}
            variants={floatingVariants}
            animate="animate"
            transition={{ duration: 5, delay: secondRandom(4), repeat: Infinity }}
            style={{ width: size, height: size, ...style }}
        >
        </motion.div>
    )
}

export default SmCircle
