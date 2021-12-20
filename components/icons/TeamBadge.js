import { motion } from 'framer-motion'
import React from 'react'

const TeamBadge = ({ name = "Name", position = "position", img, index }) => {
    let defaultImage = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light"
    return (
        <div className="lg:w-44 lg:h-44 md:w-44 md:h-44 w-36 h-36 relative rounded-full flex items-center justify-center overflow-hidden shadow-sm lg:m-2 m-1">
            <img src={img ? img : defaultImage}
            />
            <div className="absolute h-12 bottom-0 lg:py-2 sm:py-1 w-full flex flex-col items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', boxShadow: '0px 1px 9px 10px rgba(0,0,0,0.1)' }}>
                <h6 className="bg-gray-700" style={{ fontSize: '0.75rem' }}>{name}</h6>
                <p className="text-xs w-24 text-center leading-tight bg-gray-700" style={{ fontSize: '0.60rem' }}>{position}</p>
            </div>
        </div>
    )
}

export default TeamBadge
