import React from 'react'
import Img from 'next/image'

const SectionTitle = ({ title = "title", description, children }) => {
    return (
        <div>
            <Img src="/shape.svg" alt="glaxier shape" width={100} height={16} layout="responsive" />
            <div className={`w-screen flex lg:flex-row flex-col -mt-1 items-center justify-around bg-white-dark lg:px-10 md:px-20 px-4 lg:pt-1 md:pt-1 lg:pb-20 md:pb-8 pb-8 pt-8`}>
                {title && <h2 className="lg:text-8xl md:text-6xl text-5xl text-purple font-extrabold lg:w-1/2 w-full lg:text-center md:text-center text-left lg:pb-0 pb-8 capitalize">{title}</h2>}
                {description && <h1 className="lg:text-3xl text-2xl lg:w-1/2 w-full lg:text-left md:text-center text-left lg:px-4 px-0 text-black-light">{description}</h1>}
                {children && <div className="lg:px-14 md:px-5 px-0">{children}</div>}
            </div>
        </div>
    )
}

export default SectionTitle
