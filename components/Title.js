import { motion } from 'framer-motion'
import CurvyLine from './line/CurvyLine'

const Title = ({ title, lineColor = "#9FB0E483", lineWidth, height }) => {
    return (
        <motion.div className="relative flex flex-col justify-center items-center">
            <CurvyLine color={lineColor} width={lineWidth} height={height} />
            <h2 className="lg:text-3xl md:text-2xl text-2xl font-extrabold text-center z-10">{title}</h2>
        </motion.div>
    )
}

export default Title
