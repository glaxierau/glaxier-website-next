import { motion } from 'framer-motion'
import CurvyLine from './line/CurvyLine'

const Title = ({ title, lineColor = "#9FB0E483", lineWidth, height }) => {
    return (
        <motion.div className="flex flex-col justify-center items-center">
            <CurvyLine color={lineColor} width={lineWidth} height={height} />
            <h2 className="text-3xl font-extrabold">{title}</h2>
        </motion.div>
    )
}

export default Title
