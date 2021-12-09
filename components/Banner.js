import React from 'react'
import AppButton from './AppButton'
import Img from 'next/image'
import { sanityImage } from '../hooks/tools'
import { motion } from 'framer-motion'

const Banner = ({ heroTitle, preTitle, button1, button2, link, image }) => {


    return (
        <div className="relative overflow-x-hidden">
            <div className="w-full bg-gray-600 h-screen">
                <Img {...sanityImage(image.image)} className="object-cover bg-no-repeat" layout='fill' />
            </div>

            <motion.div className="absolute lg:top-60 lg:left-40 md:top-1/3 top-1/3 left-1/2 transform lg:-translate-x-0 -translate-x-2/4 flex flex-col justify-center items-center text-white"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ stiffness: 200 }}
            >
                <h2 className="lg:text-2xl text-base font-bold">{preTitle}</h2>
                <h1 className="lg:text-7xl text-4xl mb-5" style={{ fontFamily: 'Cutive Mono' }}>{heroTitle}</h1>
                <div className="flex">
                    <AppButton bgColor="bg-blue" bgColorHover="hover:bg-red" txtColor="text-white" title={button1.buttonText} width={200} link={button1.link} />
                    <AppButton bgColor="bg-white" bgColorHover="hover:bg-red" txtColor="text-blue" txtColorHover={"hover:text-white"} title={button2.buttonText} width={140} link={button2.link} />
                </div>
            </motion.div>
            <div className="absolute bottom-0 w-screen">
                <img src="/shape.svg" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1917.95 320.19"><title>glxShape</title><path d="M1.48,1046.88l1110.81-260.6,240.23,78.44L1602,720.54l317.44,202.85v159.34H1.48Z" transform="translate(-1.48 -720.54)" fill="#F9F9FF" /></svg> */}
            </div>
            <style jsx>{`
                .bgImage{
                    height: 500px
                }
            `}

            </style>
        </div>
    )
}

export default Banner
