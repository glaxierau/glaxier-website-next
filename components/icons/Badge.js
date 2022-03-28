import React from 'react'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'

const Badge = ({ size = '24', image }) => {
    const sanityImage = useSanityImage

    return (
        <div
            className={`w-${size} h-${size} bg-white shadow-around rounded-full grid place-items-center cursor-pointer`}
        >
            {image && (
                <Img
                    {...sanityImage(image)}
                    width="85%"
                    height="85%"
                    objectFit="contain"
                    className="rounded-full"
                />
            )}
        </div>
    )
}

export default Badge
