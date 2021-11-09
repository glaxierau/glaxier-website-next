import React from 'react'

const SectionTitle = ({ title = "title", description }) => {
    return (
        <div className="w-screen flex lg:flex-row flex-col  items-center justify-around bg-white-dark -mt-2 pb-16">
            <p className="lg:text-8xl text-5xl text-purple font-extrabold lg:w-1/2 w-full text-center pb-8">{title}</p>
            <p className="lg:text-3xl text-base lg:w-1/2 w-full lg:text-left md:text-center text-left px-4 text-black-light">{description}</p>
        </div>
    )
}

export default SectionTitle
