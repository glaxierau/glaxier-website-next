import React from 'react'
import AppButton from './AppButton'
import Img from 'next/image'
import { useSelector } from 'react-redux'
import { sanityImage } from '../hooks/tools'
import { motion } from 'framer-motion'

const Banner = (props) => {
    const { data } = useSelector(state => state.data)
    const { heroTitle, preTitle, button1, button2, image } = props || data
    return (
        <>
            <div className="relative overflow-x-hidden h-screen">
                <Img {...sanityImage(image.image)} placeholder="blur" className="object-cover bg-no-repeat" layout='fill' />
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
                <img src="/shape.svg" className="w-screen absolute bottom-0" />
            </div>
            <style jsx>{`
        .bgImage{
            height: 500px
        }
    `}

            </style>
        </>
    )
}

export default Banner
