import React from 'react'
import AppButton from './AppButton'
import Img from 'next/image'
import Head from '../components/common/Head'
import { useSelector } from 'react-redux'
import { useSanityImage, upperCaseText } from '../hooks/tools'
import { motion } from 'framer-motion'
import styles from './banner.module.scss'

const Banner = (props) => {
    const { data } = useSelector((state) => state.data)
    const { heroTitle, preTitle, button1, button2, image } = props.hero || data

    const onClicked = () => {
        router.push(button1.link)
    }

    return (
        <>
            <div className="relative overflow-x-hidden h-cscreen">
                <span className={`${styles.bannerContainer}`}>
                    <Img
                        {...useSanityImage(image.image)}
                        quality={80}
                        placeholder="blur"
                        className={`object-cover bg-no-repeat ${styles.bannerImage}`}
                        layout="fill"
                    />
                </span>
                <motion.div
                    className={`absolute lg:top-40 md:top-1/2 top-[50%] left-1/2 lg:left-40 transform 
                    lg:-translate-x-0 -translate-x-2/4 
                    lg:-translate-y-0 -translate-y-1/2 
                    flex flex-col justify-center items-center text-white text-center
                  bg-gray-400 p-10 lg:p-10 rounded ${styles.bannerTextBackground}
                    lg:w-[500px] md:w-[400px] w-[90%] z-100 overflow-hidden`}
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
                    <div className="flex lg:flex-row md:flex-row flex-col items-center">
                        <motion.button
                            whileHover={{
                                scale: 1.01,
                                transition: { type: 'spring' },
                            }}
                            type="button"
                            className="bg-blue hover:bg-red text-white cursor-pointer rounded-full flex justify-center items-center m-2 transition duration-100 ease-in-out p-6"
                            style={{ minWidth: 200, height: 35, fontSize: 15 }}
                            onClick={onClicked}
                        >
                            {button1.buttonText}
                        </motion.button>
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
