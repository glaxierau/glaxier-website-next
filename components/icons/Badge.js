import React from 'react'

const Badge = ({ size = "24" }) => {
    return (
        <div className={`lg:w-${size} lg:h-${size} w-12 h-12 bg-gray-200 rounded-full lg:m-4 m-2 lg:my-5 my-3`}>
        </div>
    )
}

export default Badge
