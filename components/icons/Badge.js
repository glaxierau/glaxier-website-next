import React from 'react'
import Img from 'next/image'
import { sanityImage } from '../../hooks/tools'

const Badge = ({ size = "24", image }) => {
    return (
        <div className={`w-${size} h-${size} bg-white m-auto shadow-around rounded-full grid place-items-center cursor-pointer py-2`}>
            {image && <Img {...sanityImage(image)} width="85%" height="85%" objectFit="contain" className="rounded-full" />}
        </div>
    )
}

export default Badge
