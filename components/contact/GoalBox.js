import React, { useState } from 'react'
import { useSizeLessThan } from '../../hooks/useWindowSize'
import Img from 'next/image'
// import SVG from '../common/SVG'

const GoalBox = ({ icon, name, onClick, currentSelection }) => {
    const [hover, setHover] = useState(false)
    let sm = useSizeLessThan(600)
    let basicClassName = `lg:w-32 lg:h-32 md:w-32 md:h-32 w-24 h-24 flex flex-col items-center justify-center cursor-pointer m-2 rounded-lg transition duration-100 ease-in-out hover:bg-red hover:text-white hover:border-none`
    const activeClass = 'bg-red text-white border-none'
    const inactiveClass = 'bg-white-dark border border-purple'
    return (
        <>
            <div
                className={`${basicClassName} ${currentSelection === name ? activeClass : inactiveClass}`}
                onClick={onClick}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                {/* <SVG hover={hover} width={40} url={icon.src} id={name} color='#9FB0E4' hoveredColor='white' /> */}
                <Img {...icon} width={sm ? 30 : 50} height={sm ? 30 : 50} placeholder='empty' />
                <p className={`py-2 leading-4 text-center`} style={{ fontSize: '0.8rem' }}>{name}</p>
            </div>
        </>
    )
}

export default GoalBox
