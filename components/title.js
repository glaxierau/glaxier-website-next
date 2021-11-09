import React from 'react'
import CurvyLine from './line/CurvyLine'

const Title = ({ title, lineColor = "#9FB0E483", lineWidth, height }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <CurvyLine color={lineColor} width={lineWidth} height={height} />
            <h2 className="text-3xl font-extrabold">{title}</h2>
        </div>
    )
}

export default Title
