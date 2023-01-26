import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CurvyLine from './line/CurvyLine'

const Title = ({ title, lineColor = "#9FB0E483", lineWidth, height }) => {
    const [width, setWidth] = useState(0)

    return (
        <motion.div className={`relative flex flex-col justify-center items-center`}>
            <CurvyLine color={lineColor} width={width} height={height} />
            <div className="lg:text-3xl md:text-2xl text-2xl font-extrabold text-center z-10"
                ref={e => setWidth(e?.getBoundingClientRect().width)}
            >
                {title}</div>
        </motion.div>
    )
}

export default Title
