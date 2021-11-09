import React from 'react'

const TeamBadge = ({ name = "Name", position = "position", img }) => {
    let defaultImage = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light"
    return (
        <div className="lg:w-52 lg:h-52 md:w-44 md:h-44 w-36 h-36 relative rounded-full flex items-center justify-center overflow-hidden shadow-sm lg:m-4 m-2">
            <img src={img ? img : defaultImage}
            />
            <div className="absolute bottom-0 lg:py-3 sm:py-1 w-full flex flex-col items-center justify-center text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', boxShadow: '0px 1px 9px 20px rgba(0,0,0,0.1)' }}>
                <h6 style={{ fontSize: '0.75rem' }}>{name}</h6>
                <p className="text-xs w-24 text-center" style={{ fontSize: '0.60rem' }}>{position}</p>
            </div>
        </div>
    )
}

export default TeamBadge
