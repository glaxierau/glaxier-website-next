import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { about_settings_industry } from '../../config/carousel.setting';
import IndustrySlides from './IndustrySlides';


const Title = ({ title, onClick, id, myRef }) => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        let el = document.getElementById(`${id}`)
        let clWidth = el ? el.clientWidth : 0
        return setWidth(clWidth)
    }, [id])
    return (
        <>
            <div className="about_toggle flex flex-col justify-center items-center " onClick={onClick} >
                <h3 id={id} className="text-purple cursor-pointer text-center lg:text-sm text-sm leading-none">{title}</h3>
                <motion.div className="bg-red h-1 mt-2 "
                    animate={{ width: id === myRef ? width : 0 }} />
            </div>
        </>
    )
}


const AboutToggle = ({ content }) => {
    let defaultIndustry = "All"
    const filteredIndustries = content.map(i => i.industry.industry)
    const industries = filteredIndustries.filter((v, i) => filteredIndustries.indexOf(v) === i)
    industries.unshift(defaultIndustry)
    const [myRef, setMyRef] = useState('All')
    const [currentToShow, setToShow] = useState(content)

    const onToggle = (ind) => {
        if (ind === 'All') {
            setMyRef('All')
            setToShow(content)
        } else {
            const filteredContent = content.filter(c => c.industry.industry === ind)
            setMyRef(ind)
            setToShow(filteredContent)
        }
    }
    return (
        <>
            <div className="about_toggle">
                <Slider {...about_settings_industry}
                    arrows
                    className="flex lg:w-3/5 md:w-3/4 w-3/4 h-auto mx-auto items-center justify-center mt-10 ">
                    {industries.map((industry) => <Title id={industry} key={industry} myRef={myRef} title={industry} onClick={() => onToggle(industry)} />)}
                </Slider>
                <IndustrySlides contents={currentToShow} />
            </div>
        </>
    )
}



export default AboutToggle
