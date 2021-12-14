import React from 'react'

const Badge = ({ size = "24" }) => {
    return (
        <div className={`w-${size} h-${size} m-auto bg-gray-200 rounded-full`}>
        </div>
    )
}

export default Badge
