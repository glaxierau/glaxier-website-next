import React from 'react'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'

const Badge = ({ size = '24', image, link = '#' }) => {
    const sanityImage = useSanityImage
    console.log(link)
    return (
        <div
            className={`w-${size} h-${size} bg-white shadow-around rounded-full grid place-items-center cursor-pointer`}
        >
            {image && (
                <a href={link} rel="noopener noreferrer">
                    <Img
                        {...sanityImage(image)}
                        width="85%"
                        height="85%"
                        objectFit="contain"
                        className="rounded-full"
                    />
                </a>
            )}
        </div>
    )
}

export default Badge
