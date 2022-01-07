import Img from 'next/image'
import { useSanityImage } from "../../hooks/tools"

const CarouselCard = ({ company, text, logo }) => {
    return (
        <div className="h-auto bg-white shadow-around rounded-xl p-4 m-8">
            <div className="flex items-center justify-start py-2">
                <div className="border border-purple h-10 w-10 rounded-full grid place-items-center " >
                    <Img {...useSanityImage(logo)} width="100%" height="100%" className="object-contain rounded-full" />
                </div>
                <p className="ml-4 font-bold">{company}</p>
            </div>
            <p className="text-black-light py-4" style={{ fontSize: '0.68rem', lineHeight: '1rem' }}>{text}</p>
        </div>
    )
}

export default CarouselCard