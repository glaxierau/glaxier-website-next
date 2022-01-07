import { useState } from 'react'
import { motion } from 'framer-motion'
import DropDown from '../layouts/DropDown'
import { useMobileScreen } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'


function NavSVGIcon({ size = ['20', '20'], children, withDropDown = false, onPointerEnter, ...otherProps }) {

    let router = useRouter()
    let lang = router.locales
    const lg = !useMobileScreen
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState(0)
    const getPosition = () => {
        const value = document.getElementById("globeSVG").offsetLeft
        setPosition(value - 20)
    }
    return (
        <div id="globeSVG"
            className="h-20 w-10 flex items-center justify-start"
            onMouseEnter={() => getPosition()}
            onMouseLeave={() => setOpen(false)}
            onClick={() => { setOpen(!open), getPosition() }}
            {...otherProps}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" className={`fill-purple ${lg && 'hover:fill-red'} cursor-pointer`} width={size[0]} height={size[1]} viewBox="0 0 29.257 29.25"
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
                onPointerEnter={onPointerEnter}
            >
                {children}
            </motion.svg>
            {withDropDown && <DropDown dropDownList={lang} open={open} width={20} position={position} onLeave={() => setOpen(false)} />}
        </div>
    )
}

export default NavSVGIcon
