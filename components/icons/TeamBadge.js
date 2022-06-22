import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'

const TeamBadge = ({ name = 'Name', position = 'position', image, index }) => {
    const sanityImage = useSanityImage
    let defaultImage =
        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light'
    return (
        <li className="lg:w-44 lg:h-44 md:w-44 md:h-44 w-36 h-36  relative rounded-full flex items-center justify-center overflow-hidden shadow-sm lg:m-2 m-1">
            {image && (
                <Img
                    {...sanityImage(image.image)}
                    layout="fill"
                    objectFit="cover"
                />
            )}
            <div
                className="absolute h-14 bottom-0 w-full flex flex-col items-center justify-start text-white"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    boxShadow: '0px 1px 9px 10px rgba(0,0,0,0.4)',
                }}
            >
                <h6 className="" style={{ fontSize: '0.85rem' }}>
                    {name}
                </h6>
                <p
                    className="text-xs w-[75%] text-center leading-tight"
                    style={{ fontSize: '0.7rem' }}
                >
                    {position}
                </p>
            </div>
        </li>
    )
}

export default TeamBadge
