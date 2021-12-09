import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Slider from "react-slick";
import { about_settings, about_settings_industry } from '../../config/carousel.setting';
import { getData, getDataInsideComp } from '../../hooks/getData'
import IndustrySlides from './IndustrySlides';

const Title = ({ title, onClick, id, myRef }) => {
    return (
        <div className="about_toggle flex flex-col justify-center items-center " onClick={onClick} >
            <h3 className="text-purple cursor-pointer text-center lg:text-sm text-sm leading-none" id={id}>{title}</h3>
            <motion.div className="bg-red h-1 mt-2 "
                animate={{ width: id === myRef ? 100 : 0 }} />
        </div>
    )
}

const AboutToggle = ({ clients, industry }) => {

    const [myRef, setMyRef] = useState('')
    const [currentToShow, setToShow] = useState(clients)

    const [toggles, setToggles] = useState({
        one: true,
        two: false,
        three: false
    })

    const onToggle = async (ref) => {
        const filteredClients = clients.filter(client => client.industry._ref === ref)
        console.log(filteredClients)
        setMyRef(ref)
        setToShow(filteredClients)
    }

    return (
        <>
            <div className="about_toggle">
                <Slider {...about_settings_industry} arrows className="flex lg:w-3/5 md:w-3/4 w-3/4 h-14 mx-auto items-center justify-center mt-10 ">
                    {industry.map(industry => <Title id={industry._id} key={industry._id} myRef={myRef} title={industry.industry} onClick={() => onToggle(industry._id)} />)}
                </Slider>
                {currentToShow !== [] && <IndustrySlides clients={currentToShow} />}
            </div>
        </>
    )
}



export default AboutToggle
