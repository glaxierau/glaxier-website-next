import React from 'react'

const CurvyLine = ({ width, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="svgstyle -mb-11" width={width} height="24.999" viewBox="0 0 250.023 24.999">
            <path id="Path_2" data-name="Path 2" d="M-59.5-4.5c9.994-.026,12.138,9.835,27.778,10S-15.63-4.426.024-4.5s16.214,10,31.746,10,16.239-10,31.746-10,16.144,10.03,31.746,10c15.927.013,16.1-9.966,31.746-10s16.041,10.053,31.746,10c15.978.1,15.913-9.99,31.746-10" transform="translate(59.519 12.002)" fill="none" stroke={color} strokeWidth="15" />
        </svg>
    )
}

export default CurvyLine
