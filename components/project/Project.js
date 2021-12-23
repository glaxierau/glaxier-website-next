import { useSelector } from 'react-redux'
import SlideIn from '../animation/SlideIn'
import AppButton from '../AppButton'

const Project = (props) => {
    const { ctaButton } = props
    return (
        <>
            <div id="project" className="relative flex flex-col items-center justify-center -mt-3 lg:h-96 h-60 overflow-hidden">
                <img src="/assets/img/home/largeimg.png" className="bg_image" alt="bg-image" />
                <SlideIn className="z-10 flex flex-col items-center justify-center">
                    <h3 className="lg:text-2xl text-xl text-white font-bold lg:mb-12 mb-2">Let’s talk about “OUR” project.</h3>
                    <AppButton link={ctaButton.link} customized={true} title={ctaButton.buttonText} width={200} bgColor="bg-transparent" bgColorHover="hover:bg-white" txtColor="text-white" txtColorHover="hover:text-blue-dark" />
                </SlideIn>
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
