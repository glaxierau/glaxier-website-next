import { useSelector } from 'react-redux'
import SlideIn from '../animation/SlideIn'
import AppButton from '../AppButton'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'
import SlideInRight from '../animation/SlideInRight'

const Project = (props) => {
    const { ctaButton, image, title } = props
    return (
        <>
            <div id="project" className="relative flex flex-col items-center justify-center -mt-3 lg:h-96 h-60 overflow-hidden">
                <Img {...useSanityImage(image.image)} layout='fill' objectFit='cover' className="bg_image" alt="bg-image" />
                <div className="z-10 flex flex-col items-center justify-center">
                    <SlideIn>
                        <h3 className="lg:text-2xl text-xl text-white font-bold lg:mb-12 mb-2 text-center">{title}</h3>
                    </SlideIn>
                    <SlideInRight>
                        <AppButton link={ctaButton.link} customized={true} title={ctaButton.buttonText} bgColor="bg-transparent" bgColorHover="hover:bg-white" txtColor="text-white" txtColorHover="hover:text-blue-dark" />
                    </SlideInRight>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .bg_image{
                        width: auto;
                        height: 100%;
                        object-fit: cover;
                        position: absolute;
                        top: 0;
                        z-index: 1;
                        margin-top: -5px;
                    }
                    @media screen and (min-width: 1600px) {
                        .bg_image {
                            width: 100%;
                            height: auto;
                        }
                    }
                    `
                }
            </style>
        </>
    )
}

export default Project
