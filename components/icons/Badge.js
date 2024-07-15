import React from 'react'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'

const Badge = ({ size = '40', image, link = '#' }) => {
    const sanityImage = useSanityImage
    console.log(link)
    return (
        <div
            className={`w-${size} h-${size} bg-white shadow-around rounded-full grid`}
        >
            {image && (
                <a
                    href={link}
                    rel="noopener noreferrer"
                    className="w-full h-full grid m-0 p-6"
                >
                    <Img
                        {...sanityImage(image)}
                        width="120px"
                        height="120px"
                        objectFit="contain"
                    />
                </a>
            )}
        </div>
    )
}

export default Badge
