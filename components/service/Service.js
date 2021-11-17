import React from 'react'
import Title from '../Title'
import style from '../../styles/Service.module.css'
import { mobileScreen } from '../../hooks/useWindowSize'
import Particles from '../particles/Particles'
import Circle from '../particles/Circle'

const Service = () => {
    let sm = mobileScreen()
    return (
        <div className="bg-white-dark pt-10">
            <div className="lg:px-44 px-4">
                <h2 className="lg:text-3xl text-base font-extrabold lg:mb-5 mb-1">We are</h2>
                <h1 className="lg:text-3xl text-base font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
                <p className="text-sm font-thin text-gray-500">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
            </div>
            <div className="w-full h-screen mt-20 overflow-hidden flex justify-center items-center relative text-center">
                <img src="/assets/img/home/Artboard2.png" className={"circle_image absolute top-0 z-10 w-screen object-cover h-screen"} alt="circles" />
                <Particles />
                <Circle style={sm ? { top: '8rem', left: '5%' } : { top: '5rem', left: '20%' }} title="Graphic Design" />
                <Circle style={sm ? { top: '5rem', right: '5%' } : { top: '5rem', right: '13%' }} title="Digital Advertising" />
                <Circle style={sm ? { bottom: '8rem', left: '5%' } : { bottom: '2rem', left: '14%' }} title="Social Media Management" />
                <Circle style={sm ? { bottom: '8rem', right: '5%' } : { bottom: '2rem', right: '20%' }} title="Website Development" />
                <div className="position top-0 left-1/2 z-10 flex items-center justify-center flex-col mt-6">
                    <Title title="Our Services" lineColor="#fff" lineWidth="210" /> <br />
                    <h3 className="lg:text-lg font-black text-base">We can do these awesome things</h3> <br />
                    <p className="lg:w-96 w-72 text-xs text-white font-thin leading-5">Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.</p>
                </div>
            </div>
        </div>
    )
}

export default Service
