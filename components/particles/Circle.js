import React from 'react'

const Circle = ({ title, ...otherProps }) => {
    return (
        <div id="circle" className="circle absolute z-20 flex items-center justify-center lg:w-56 lg:h-56 w-32 h-32 rounded-full hover:border-2 cursor-pointer" {...otherProps}>
            <div id="circle-shadow" className="lg:w-48 lg:h-48 w-28 h-28 rounded-full bg-white bg-opacity-95 hover:bg-red flex items-center justify-center px-10 shadow-around hover:shadow-none text-red hover:text-white transition duration-200 ease-in-out">
                <h2 className="lg:text-xl text-sm text-center font-bold">{title}</h2>
            </div>
        </div>
    )
}

export default Circle
