import React from 'react'
import AppButton from './AppButton'
import Img from 'next/image'
import Head from '../components/common/Head'
import { useSelector } from 'react-redux'
import { useSanityImage, upperCaseText } from '../hooks/tools'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './banner.module.css'
import { useSizeLessThan } from '../hooks/useWindowSize'


const Banner = (props) => {
    const { data } = useSelector((state) => state.data)
    const sm = useSizeLessThan(600)
    const { ref, inView } = useInView({ threshold: sm ? 0.2 : 0.4 })
    const { heroTitle, preTitle, button1, button2, image } = props.hero || data
    return (
        <>
            <div className="relative overflow-x-hidden h-cscreen"
                ref={ref}>
                <motion.div
                    className='fixed w-screen h-screen overflow-hidden -z-[1]'
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.01 }}
                    transition={{
                        delay: 0.5,
                        easing: 1.1,
                        duration: 1,
                    }}
                >
                    <Img
                        {...useSanityImage(image.image)}
                        quality={80}
                        placeholder="blur"
                        className="object-cover bg-no-repeat"
                        layout="fill"
                        objectPosition="right top"
                    />
                    <motion.div className={`absolute bottom-0 left-0 w-screen h-screen bg-white-dark`}
                        initial={{ height: '0vh' }}
                        animate={{ height: !inView ? '100vh' : '0vh' }}
                        exit={{ height: '0vh' }}
                        transition={{
                            ease: [0, 0.71, 0.2, 1.01],
                            duration: 0.2
                        }} />
                </motion.div>
                <motion.div
                    className={`absolute lg:top-40 md:top-1/2 top-[50%] left-1/2 lg:left-40 transform 
                    lg:-translate-x-0 -translate-x-2/4 
                    lg:-translate-y-0 -translate-y-1/2 
                    flex flex-col justify-center items-center text-white text-center
                  bg-gray-400 p-10 lg:p-10 rounded ${styles.bannerTextBackground}
                    lg:w-[500px] md:w-[400px] w-[90%] z-100 overflow-hidden`}
                    initial={{ x: 'inherit', width: 0, opacity: 0 }}
                    animate={{ width: sm ? '90%' : '500px', opacity: [0, 0, 1] }}
                    transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.6,
                    }}>
                    <h2 className="lg:text-3xl text-2xl font-bold">
                        {upperCaseText(preTitle)}
                    </h2>
                    {/* <AnimatedTextCharacter text="Just a test" /> */}
                    <h1
                        className="lg:text-8xl text-6xl mb-5"
                        style={{ fontFamily: 'Cutive Mono' }}
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        exit={{ width: 0 }}
                        transition={{ repeat: true }}
                    >
                        {heroTitle}
                    </h1>
                    <div className="flex lg:flex-row md:flex-row flex-col items-center">
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
                <motion.div className="absolute bottom-0 w-screen"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.8,
                    }}>
                    <Img
                        src="/shape.svg"
                        priority
                        alt="hero shape"
                        layout="responsive"
                        width={100}
                        height={16}
                    />
                </motion.div>
                <div className="bg-white-dark absolute bottom-0 w-screen h-2 " />
            </div>
        </>
    )
}

export default Banner
