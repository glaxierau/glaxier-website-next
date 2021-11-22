import React from 'react'

const SectionTitle = ({ title = "title", description, children }) => {
    return (
        <>
            <img src="/shape.svg" alt="glaxier shape" />
            <div className={`w-screen flex lg:flex-row flex-col  items-center justify-around bg-white-dark -mt-2 pb-16 px-10 pr-20`}>
                {title && <p className="lg:text-8xl text-5xl text-purple font-extrabold lg:w-1/2 w-full text-center pb-8">{title}</p>}
                {description && <h1 className="lg:text-3xl text-base lg:w-1/2 w-full lg:text-left md:text-center text-left px-4 text-black-light">{description}</h1>}
                {children && <div className="lg:px-14 md:px-5 px-0">{children}</div>}
            </div>
        </>
    )
}

export default SectionTitle
