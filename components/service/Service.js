import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { mobileScreen, withSizeLessThan } from '../../hooks/useWindowSize'
import Circle from '../particles/Circle'
import { setToTrue } from '../../hooks/setToTrue'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { getDataInsideComp } from '../../hooks/getData'
import Title from '../Title'
import Loading from '../loading/Loading'
import Particles from '../particles/Particles'
import SlideIn from '../animation/SlideIn'
import AppButton from '../AppButton'

const Service = ({ paddingBottom = false }) => {
    const { data } = useSelector(state => state.data)
    const { services, serviceMap } = data


    // ------------------ database variables -------------------
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(true)

    // ----------------------------- Variables ------------------------------
    const [defaultServiceMap, setDefaultServiceMap] = useState({})
    const [currentIndex, setIndex] = useState({})
    const [changing, setChanging] = useState(false)


    // ------------ get data from database --------------
    useEffect(() => {
        if (services && serviceMap) {
            setDefaultServiceMap({ _key: serviceMap._key, serviceDescription: serviceMap.defaultDescription[0].children[0].text, serviceSubtitle: serviceMap.defaultSubtitle, serviceTitle: serviceMap.defaultTitle })
            setIndex({ _key: serviceMap._key, serviceDescription: serviceMap.defaultDescription[0].children[0].text, serviceSubtitle: serviceMap.defaultSubtitle, serviceTitle: serviceMap.defaultTitle })
            setLists(serviceMap.services)
            return setLoading(false)
        } else {
            return setLoading(true)
        }
    }, [services])

    const [lists, setLists] = useState([])


    const onSelecting = (e) => {
        const innerText = e.target.innerText
        const foundIndex = lists.filter(list => list.serviceTitle === innerText)[0]
        const newIndex = { _key: foundIndex._key, serviceDescription: foundIndex.serviceDescription[0].children[0].text, serviceSubtitle: foundIndex.serviceSubtitle, serviceTitle: foundIndex.serviceTitle }
        setIndex(newIndex)
        // setAllToFalse(lists, setLists);
        // setToTrue(foundIndex, lists, setLists)
    }


    useEffect(() => {
        setChanging(false)
        return setTimeout(() => setChanging(true), 300)
    }, [currentIndex])

    // -------------------- Screen Responsiveness ---------------
    let sm = mobileScreen()
    let mobileView = withSizeLessThan(600)

    if (!loading) {
        return (
            <motion.div className={`bg-white-dark ${paddingBottom ? 'py-10' : 'pt-10'} `}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <SlideIn>
                    <div className="lg:px-44 md:px-40 px-4">
                        <h2 className="lg:text-3xl md:text-3xl text-2xl font-extrabold lg:mb-5 mb-1">{services.introductionSection.preTitle}</h2>
                        <h1 className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-red mb-8">{services.introductionSection.title}</h1>
                        <p className="text-small font-thin text-gray-500 xl:w-3/4 lg:3/4 w-full">{services.introductionSection.sectionDescription[0].children[0].text}</p>
                    </div>
                </SlideIn>
                <div className="h-screen  mt-20  flex justify-center items-center relative text-center overflow-visible" style={{ width: '100%' }}>
                    {/* <img onClick={() => { setIndex(defaultServiceMap), setAllToFalse(lists, setLists) }} src={`/assets/img/home/${mobileView ? 'smCircles' : 'lgCircles'}.png`} className={"circle_image absolute top-0 z-10 w-full lg:object-cover md:object-cover object-cover h-screen"} alt="circles" /> */}
                    <img onClick={() => { setIndex(defaultServiceMap), setAllToFalse(lists, setLists) }} src={`/assets/img/home/${mobileView ? 'smCircles' : 'lgCircles'}.png`} className={"circle_image absolute top-0 z-10 w-full lg:object-cover md:object-cover object-cover h-screen"} alt="circles" />
                    <Particles />
                    <Circle 
                        style={sm ? { top: '5rem', left: '5%' } : { top: '5rem', left: '20%' }} 
                        title={serviceMap.services[0].serviceTitle} 
                        onClick={(e) => onSelecting(e)} 
                    />
                    <Circle 
                        style={sm ? { top: '3rem', right: '5%' } : { top: '5rem', right: '13%' }} 
                        title={serviceMap.services[1].serviceTitle} 
                        onClick={(e) => onSelecting(e)} />
                    <Circle 
                        style={sm ? { bottom: '4rem', left: '5%' } : { bottom: '2rem', left: '14%' }} 
                        title={serviceMap.services[2].serviceTitle} 
                        onClick={(e) => onSelecting(e)} />
                    <Circle 
                        style={sm ? { bottom: '4rem', right: '5%' } : { bottom: '2rem', right: '20%' }} 
                        title={serviceMap.services[3].serviceTitle} 
                        onClick={(e) => onSelecting(e)} />
                    {changing && currentIndex &&
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
                            <p className="lg:w-96 w-72 text-white font-thin leading-5 text-sm">
                                {currentIndex.serviceDescription || "loading"}
                            </p>
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
                    }
                </div>
            </motion.div>
        )
    }
    else {
        return <Loading />
    }
}




export default Service
