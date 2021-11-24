import { useState } from 'react'
import { motion } from 'framer-motion'
import DropDown from '../layouts/DropDown'
import { mobileScreen } from '../../hooks/useWindowSize'

function NavSVGIcon({ size = ['20', '20'], children, withDropDown = false, ...otherProps }) {
    let lang = [
        { label: 'EN' },
        { label: 'TH' },
        { label: 'DE' },
    ]
    const lg = !mobileScreen()
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState(0)
    const getPosition = () => {
        const value = document.getElementById("globeSVG").offsetLeft
        setPosition(value - 20)
    }
    return (
        <div id="globeSVG"
            className="h-20 w-10 flex items-center justify-start"
            onMouseEnter={() => { setOpen(true), getPosition() }}
            onMouseLeave={() => setOpen(false)}
            onClick={() => { setOpen(!open), getPosition() }}
            {...otherProps}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" className={`fill-purple ${lg && 'hover:fill-red'} cursor-pointer`} width={size[0]} height={size[1]} viewBox="0 0 29.257 29.25"
                onClick={() => setOpen(!open)}
            >
                {children}
            </motion.svg>
            {withDropDown && <DropDown dropDownList={lang} position={0} open={open} width={20} position={position} onLeave={() => setOpen(false)} />}
        </div>
    )
}

export default NavSVGIcon
