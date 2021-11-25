import React, { useEffect, useState } from 'react'
import Title from '../Title'
import { mobileScreen, withSizeLessThan } from '../../hooks/useWindowSize'
import Particles from '../particles/Particles'
import Circle from '../particles/Circle'
import { setToTrue } from '../../hooks/setToTrue'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { motion } from 'framer-motion'

const Service = ({ paddingBottom = false }) => {
    const defaultIndex = { type: 1, label: "Our Services", subTitle: 'We can do these awesome things', description: 'Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.', active: false }
    const [currentIndex, setIndex] = useState(defaultIndex)
    const [changing, setChanging] = useState(false)
    let sm = mobileScreen()
    let mobileView = withSizeLessThan(600)
    const [lists, setLists] = useState([
        { type: 1, label: "Graphic Design", subTitle: 'We can do these awesome things', description: 'A complete solution for digital-ready businesses. Generate sales/leads/engagement across Google, Facebook, Instagram, TikTok and More.', active: false },
        { type: 2, label: "Digital Advertising", subTitle: 'We can do these awesome things', description: 'A complete solution for digital-ready businesses. Generate sales/leads/engagement across Google, Facebook, Instagram, TikTok and More.', active: false },
        { type: 3, label: "Social Media Management", subTitle: 'We can do these awesome things', description: 'A complete solution for digital-ready businesses. Generate sales/leads/engagement across Google, Facebook, Instagram, TikTok and More.', active: false },
        { type: 4, label: "Website Development", subTitle: 'We can do these awesome things', description: 'A complete solution for digital-ready businesses. Generate sales/leads/engagement across Google, Facebook, Instagram, TikTok and More.', active: false },
    ])

    const onSelecting = (e) => {
        const innerText = e.target.innerText
        const foundIndex = lists.filter(list => list.label === innerText)[0]
        setIndex(foundIndex)
        setAllToFalse(lists, setLists);
        setToTrue(foundIndex, lists, setLists)
    }
    useEffect(() => {
        setChanging(false)
        return setTimeout(() => setChanging(true), 300)
    }, [currentIndex.label])
    return (
        <div className={`bg-white-dark ${paddingBottom ? 'py-10' : 'pt-10'} `}>
            <div className="lg:px-44 md:px-40 px-4">
                <h2 className="lg:text-3xl md:text-3xl text-2xl font-extrabold lg:mb-5 mb-1">We are</h2>
                <h1 className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
                <p className="text-small font-thin text-gray-500 xl:w-3/4 lg:3/4 w-full">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
            </div>
            <div className="h-screen  mt-20  flex justify-center items-center relative text-center overflow-visible" style={{ width: '100%' }}>
                <img onClick={() => { setIndex(defaultIndex), setAllToFalse(lists, setLists) }} src={`/assets/img/home/${mobileView ? 'smCircles' : 'lgCircles'}.png`} className={"circle_image absolute top-0 z-10 w-full lg:object-cover md:object-cover object-cover h-screen"} alt="circles" />
                <Particles />
                <Circle style={sm ? { top: '8rem', left: '5%' } : { top: '5rem', left: '20%' }} title={lists[0].label} onClick={(e) => onSelecting(e)} active={lists[0].active} />
                <Circle style={sm ? { top: '5rem', right: '5%' } : { top: '5rem', right: '13%' }} title={lists[1].label} onClick={(e) => onSelecting(e)} active={lists[1].active} />
                <Circle style={sm ? { bottom: '6rem', left: '5%' } : { bottom: '2rem', left: '14%' }} title={lists[2].label} onClick={(e) => onSelecting(e)} active={lists[2].active} />
                <Circle style={sm ? { bottom: '8rem', right: '5%' } : { bottom: '2rem', right: '20%' }} title={lists[3].label} onClick={(e) => onSelecting(e)} active={lists[3].active} />
                {changing &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="position top-0 left-1/2 z-10 flex items-center justify-center flex-col mt-6">
                        <Title title={currentIndex.label} lineColor="#fff" lineWidth="210" /> <br />
                        <h3 className="lg:text-lg font-black text-base">{currentIndex.subTitle}</h3> <br />
                        <p className="lg:w-96 w-72 text-white font-thin leading-5">{currentIndex.description}</p>
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Service
