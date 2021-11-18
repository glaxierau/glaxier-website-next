import React from 'react'

const Circle = ({ active, title, onClick, ...otherProps }) => {
    const basicClassName = `absolute z-20 flex items-center justify-center lg:w-56 lg:h-56 w-32 h-32 rounded-full cursor-pointer ${active && 'border-2'} hover:border-2`
    return (
        <div onClick={onClick} className={`${basicClassName}`} {...otherProps}>
            <div onClick={onClick} className={`lg:w-48 lg:h-48 w-28 h-28 rounded-full bg-white ${active && 'bg-red'}  bg-opacity-95 hover:bg-red flex items-center justify-center px-10 ${active ? 'shadow-none' : 'shadow-around'} hover:shadow-none ${active ? 'text-white' : 'text-red'} hover:text-white transition duration-200 ease-in-out`}>
                <h2 className="lg:text-xl text-sm text-center font-bold">{title}</h2>
            </div>
        </div>
    )
}

export default Circle
