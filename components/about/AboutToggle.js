import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Slider from "react-slick";
import { about_settings_industry } from '../../config/carousel.setting';
import IndustrySlides from './IndustrySlides';

const Title = ({ title, onClick, id, myRef }) => {
    let el = document.getElementById(`${id}`)
    let width = el ? el.clientWidth : 0
    return (
        <div className="about_toggle flex flex-col justify-center items-center " onClick={onClick} >
            <h3 id={id} className="text-purple cursor-pointer text-center lg:text-sm text-sm leading-none" id={id}>{title}</h3>
            <motion.div className="bg-red h-1 mt-2 "
                animate={{ width: id === myRef ? width : 0 }} />
        </div>
    )
}

const specificClient = (array, id) => {
    const newArray = array.filter(i => i === id)[0]
    return newArray
}

const AboutToggle = ({ clients, industry }) => {
    let defaultInd = { industry: 'All', _id: 'all' }
    const newClientRef = clients.map(cli => cli.industry._ref)
    let filteredIndustry = industry.filter(i => i._id === specificClient(newClientRef, i._id))
    filteredIndustry.unshift(defaultInd)
    industry = filteredIndustry

    const [myRef, setMyRef] = useState('all')
    const [currentToShow, setToShow] = useState(clients)

    const onToggle = (ref) => {
        if (ref === 'all') {
            setMyRef(ref)
            setToShow(clients)
        } else {
            const filteredClients = clients.filter(client => client.industry._ref === ref)
            setMyRef(ref)
            setToShow(filteredClients)
        }
    }

    return (
        <>
            <div className="about_toggle">
                <Slider {...about_settings_industry} arrows className="flex lg:w-3/5 md:w-3/4 w-3/4 h-auto mx-auto items-center justify-center mt-10 ">
                    {industry.map(industry => <Title id={industry._id} key={industry._id} myRef={myRef} title={industry.industry} onClick={() => onToggle(industry._id)} />)}
                </Slider>
                {currentToShow !== [] && <IndustrySlides clients={currentToShow} />}
            </div>
        </>
    )
}



export default AboutToggle
