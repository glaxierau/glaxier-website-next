import React, { useState } from 'react'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const GoalBox = ({ icon, active = false, name, onClick }) => {
    let sm = withSizeLessThan(600)
    let [boxHovered, setBoxHovered] = useState(false)
    let link = boxHovered ? `/assets/img/contact/icons/white_icons/${icon}.svg` : `/assets/img/contact/icons/blue_icons/${icon}.svg`
    let activeLink = `/assets/img/contact/icons/white_icons/${icon}.svg`
    let basicClassName = "lg:w-32 lg:h-32 md:w-32 md:h-32 w-24 h-24 flex flex-col items-center justify-center cursor-pointer m-2 rounded-lg transition duration-100 ease-in-out"
    let activeClassName = `bg-red text-white border-0`
    let inactiveClassName = `bg-white-dark text-purple border border-purple`
    return (
        <>
            <div
                className={`${basicClassName} ${active || boxHovered ? activeClassName : inactiveClassName}`}
                onMouseEnter={() => setBoxHovered(true)}
                onMouseLeave={() => setBoxHovered(false)}
                onClick={onClick}
            >
                <img src={active && activeLink || link} width={sm ? 30 : 50} />
                <p className={`py-2 text-center`}>{name}</p>
            </div>
        </>
    )
}

export default GoalBox
