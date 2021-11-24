import React from 'react'
import AppButton from '../AppButton'

const Project = () => {
    return (
        <>
            <div id="project" className="relative flex flex-col items-center justify-center -mt-3 lg:h-96 h-60">
                <img src="/assets/img/home/largeimg.png" className="bg_image" alt="bg-image" />
                <div className="absolute lg:top-24 top-12 z-10 flex flex-col items-center justify-center">
                    <h3 className="lg:text-2xl text-xl text-white font-bold lg:mb-12 mb-2">Let’s talk about “OUR” project.</h3>
                    <AppButton customized={true} title="GET STARTED" width={200} bgColor="bg-transparent" bgColorHover="hover:bg-white" txtColor="text-white" txtColorHover="hover:text-blue-dark" />
                </div>
            </div>
            <style jsx>
                {
                    `
                .bg_image{
                    width: 100%;
                    height: 22rem;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    z-index: 1;
                    margin-top: -5px;
                }
                @media screen and (max-width: 1025px) {
                    .bg_image {
                        height: 24rem;
                    }
                }
                @media screen and (max-width: 1090px) {
                    .bg_image {
                        height: 12rem;
                    }
                }
                `
                }
            </style>
        </>
    )
}

export default Project
