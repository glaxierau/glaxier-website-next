import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import B2bIndustry from './b2b-industry'
import B2cIndustry from './b2c-industry'
import NonProfit from './non-profit'
import style from '../../styles/About.module.css'

const Title = ({ title, active = false, onClick, id }) => {
    return (
        <div className="about_toggle flex flex-col justify-center items-center" onClick={onClick} >
            <h3 className="text-purple lg:mx-4 mx-4 m-1 cursor-pointer lg:text-base text-sm leading-none" id={id}>{title}</h3>
            {active &&
                <motion.div className="bg-red w-3/4 h-1"
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    exit={{ width: 0 }} />}
        </div>
    )
}

const AboutToggle = () => {
    const [toggles, setToggles] = useState({
        one: true,
        two: false,
        three: false
    })

    const onToggle = (e) => {
        e.preventDefault()
        let id = e.target.id
        switch (id) {
            case 'one':
                return setToggles({ one: true, two: false, three: false });
            case 'two':
                return setToggles({ one: false, two: true, three: false });
            case 'three':
                return setToggles({ one: false, two: false, three: true });
        }
    }
    return (
        <>
            <div className="about_toggle">
                <div className="flex w-full items-center justify-center mt-10">
                    <Title id="one" title="B2C Industry" active={toggles.one} onClick={e => onToggle(e)} />
                    <Title id="two" title="B2B Industry" active={toggles.two} onClick={e => onToggle(e)} />
                    <Title id="three" title="Non-Profit" active={toggles.three} onClick={e => onToggle(e)} />
                </div>
                <motion.div>
                    <AnimatePresence exitBeforeEnter>
                        {toggles.one && <B2cIndustry />}
                        {toggles.two && <B2bIndustry />}
                        {toggles.three && <NonProfit />}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
}



export default AboutToggle
