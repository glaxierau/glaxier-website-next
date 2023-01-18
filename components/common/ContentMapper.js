import Image from "next/image"
import Slider from "react-slick"
import { filterArray, useFilter } from "../../helper/functions"
import { urlFor } from "../../hooks/tools"
import BlockContent from "../BlockContent/BlockContent"
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react"


function ContentMapper({ content }) {
    return content.map(({ _type, _key }) => {
        switch (_type) {
            case 'content':
                return <BlockContent blocks={filterArray(content, 'content', _key).text} key={_key} />
            case 'singleImage':
                return <CustomImage image={filterArray(content, 'singleImage', _key).image} key={_key} />
            case 'link':
                return <CustomLink link={filterArray(content, 'link', _key).link} key={_key} />
            case 'carousel':
                return <CustomCarousel images={filterArray(content, 'carousel', _key).carousel} key={_key} />
            default:
                return
        }
    })
}

const CustomImage = ({ image }) => {
    const [toggler, setToggler] = useState(false)
    const imageURL = urlFor(image).url()
    return (
        <div className="relative w-full h-[350px] my-10">
            <Image
                src={urlFor(image).height(600).url()}
                className="object-cover bg-no-repeat rounded-lg cursor-pointer"
                layout="fill"
                alt={image.alt}
                title={image.title}
                onClick={() => setToggler(!toggler)}
            />
            <FsLightbox
                toggler={toggler}
                sources={[imageURL]}
            />
        </div>
    )
}

const CustomLink = ({ link }) => {
    return (
        <iframe className="w-full h-[350px] rounded-lg my-10"
            allowFullScreen
            src={link}>
        </iframe>
    )
}

const CustomCarousel = ({ images }) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    const all = images.map(image => urlFor(image.image).height(800).url())

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 gap-2 my-5">
            {
                images.map((i, index) => {
                    return (
                        <div key={index} className='relative w-full h-[200px] hover:scale-[1.02] transition-all hover:z-10'>
                            <Image
                                src={urlFor(i.image).height(200).url()}
                                className="object-cover bg-no-repeat rounded-lg cursor-pointer"
                                layout="fill"
                                alt={i.image.alt}
                                title={i.image.title}
                                onClick={() => {
                                    openLightboxOnSlide(index + 1)
                                }}
                            />
                        </div>
                    )
                })
            }
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={all}
                slide={lightboxController.slide}
            />
        </div>
    )
}
export default ContentMapper