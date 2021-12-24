import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { mobileScreen, withSizeLessThan } from '../../hooks/useWindowSize'
import Circle from '../particles/Circle'
import Title from '../Title'
import Particles from '../particles/Particles'
import SlideIn from '../animation/SlideIn'
import AppButton from '../AppButton'
import BlockContent from '../BlockContent/BlockContent'
import Img from 'next/image'

const Service = (props) => {

    const { paddingBottom = false, services, defaultDescription, defaultSubtitle, defaultTitle, _id } = props
    const defaultServiceMap = { id: _id, serviceTitle: defaultTitle, serviceSubtitle: defaultSubtitle, serviceDescription: defaultDescription }

    // ----------------------------- Variables ------------------------------
    const [currentIndex, setIndex] = useState(defaultServiceMap)

    const onSelecting = (e) => {
        const innerText = e.target.innerText
        const serviceIndex = services.filter(s => s.bubbleServiceName === innerText)[0]
        setIndex(serviceIndex)
    }


    // -------------------- Screen Responsiveness ---------------
    let sm = mobileScreen()
    let mobileView = withSizeLessThan(600)

    return (
        <motion.div className={`bg-white-dark ${paddingBottom ? 'py-10' : 'pt-10'} `}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <SlideIn className="lg:px-44 md:px-40 px-4">
                <h2 className="lg:text-3xl md:text-3xl text-2xl font-extrabold lg:mb-5 mb-1">{props.preTitle}</h2>
                <h1 className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-red mb-8">{props.title}</h1>
                <BlockContent blocks={props.sectionDescription} />
            </SlideIn>

            <div className="h-screen mt-20 flex justify-center items-center relative text-center" style={{ width: '100%' }}>
                <Img onClick={() => { setIndex(defaultServiceMap) }} src={`/assets/img/home/${mobileView ? 'smCircles' : 'lgCircles'}.png`} layout='fill' objectFit='cover' className={"circle_image absolute top-0 z-10 w-full lg:object-cover md:object-cover object-cover h-screen"} alt="circles" />
                <Particles />
                <Circle
                    style={sm ? { top: '5rem', left: '5%' } : { top: '5rem', left: '20%' }}
                    title={services[0].serviceTitle}
                    onClick={(e) => onSelecting(e)}
                />
                <Circle
                    style={sm ? { top: '3rem', right: '5%' } : { top: '5rem', right: '13%' }}
                    title={services[1].serviceTitle}
                    onClick={(e) => onSelecting(e)} />
                <Circle
                    style={sm ? { bottom: '4rem', left: '5%' } : { bottom: '2rem', left: '14%' }}
                    title={services[2].serviceTitle}
                    onClick={(e) => onSelecting(e)} />
                <Circle
                    style={sm ? { bottom: '4rem', right: '5%' } : { bottom: '2rem', right: '20%' }}
                    title={services[3].serviceTitle}
                    onClick={(e) => onSelecting(e)} />

                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="position top-0 left-1/2 z-10 flex items-center justify-center flex-col mt-6"
                >
                    <Title
                        title={currentIndex.serviceTitle}
                        lineColor="#fff"
                        lineWidth="210"
                    />
                    <br />
                    <h3 className="lg:text-lg font-black text-base">
                        {currentIndex.serviceSubtitle || 'loading'}
                    </h3>
                    <br />
                    <div className="lg:w-96 w-72  font-thin leading-5 text-sm">
                        <BlockContent blocks={currentIndex.serviceDescription} normalColor="text-white text-sm" />
                    </div>
                    <br />
                    <AppButton
                        customized
                        title="Read More"
                        width={200}
                        bgColor="bg-purple"
                        bgColorHover="hover:bg-white"
                        txtColor="text-white"
                        txtColorHover="hover:text-purple" link="/"
                    />
                </motion.div>

            </div>
        </motion.div>
    )
}




export default Service
