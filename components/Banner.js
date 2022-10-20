import React from 'react'
import AppButton from './AppButton'
import Img from 'next/image'
import Head from '../components/common/Head'
import { useSelector } from 'react-redux'
import { useSanityImage, upperCaseText } from '../hooks/tools'
import { motion } from 'framer-motion'
import styles from './banner.module.css'

const Banner = (props) => {
    const { data } = useSelector((state) => state.data)
    const { heroTitle, preTitle, button1, button2, image } = props.hero || data
    return (
        <>
            <div className="relative overflow-x-hidden h-cscreen">
                <Img
                    {...useSanityImage(image.image)}
                    quality={80}
                    placeholder="blur"
                    className="object-cover bg-no-repeat"
                    layout="fill"
                    objectPosition="right top"
                />
                <motion.div
                    className={`absolute lg:top-40 md:top-1/2 top-1/2 left-1/2 lg:left-40 transform lg:-translate-x-0 -translate-x-2/4 flex flex-col justify-center items-center text-white text-center bg-gray-400 p-10 lg:p-10 rounded ${styles.bannerTextBackground}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ stiffness: 50 }}
                >
                    <h2 className="lg:text-3xl text-2xl font-bold">
                        {upperCaseText(preTitle)}
                    </h2>
                    <h1
                        className="lg:text-8xl text-6xl mb-5"
                        style={{ fontFamily: 'Cutive Mono' }}
                    >
                        {heroTitle}
                    </h1>
                    <div className="flex">
                        <AppButton
                            bgColor="bg-blue"
                            bgColorHover="hover:bg-red"
                            txtColor="text-white"
                            title={button1.buttonText}
                            width={200}
                            link={button1.link}
                        />
                        <AppButton
                            bgColor="bg-white"
                            bgColorHover="hover:bg-red"
                            txtColor="text-blue"
                            txtColorHover={'hover:text-white'}
                            title={button2.buttonText}
                            width={140}
                            link={button2.link}
                        />
                    </div>
                </motion.div>
                <div className="absolute bottom-0 w-screen">
                    <Img
                        src="/shape.svg"
                        priority
                        alt="hero shape"
                        layout="responsive"
                        width={100}
                        height={16}
                    />
                </div>
                <div className="bg-white-dark absolute bottom-0 w-screen h-2 " />
            </div>
        </>
    )
}

export default Banner
