import React from 'react'
import AppButton from './appButton'

const Banner = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="w-full bg-gray-600 h-screen">
                <img src="/assets/img/home/meeting.png" className="w-screen h-screen object-cover" />
            </div>
            <div className="absolute lg:top-60 lg:left-40 md:top-1/2 top-2/3 left-1/2 transform lg:-translate-x-0 -translate-x-2/4 flex flex-col justify-center items-center text-white">
                <h2 className="lg:text-2xl text-base font-bold">HEY! WE ARE</h2>
                <h1 className="lg:text-7xl text-4xl mb-5" style={{ fontFamily: 'Cutive Mono' }}>Glaxier!</h1>
                <div className="flex">
                    <AppButton bgColor="bg-blue" bgColorHover="hover:bg-red" txtColor="text-white" title="GET IN TOUCH" width={200} />
                    <AppButton bgColor="bg-white" bgColorHover="hover:bg-red" txtColor="text-blue" txtColorHover={"hover:text-white"} title="READ MORE" width={140} />
                </div>
            </div>
            <div className="absolute bottom-0 w-screen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1917.95 320.19"><title>glxShape</title><path d="M1.48,1046.88l1110.81-260.6,240.23,78.44L1602,720.54l317.44,202.85v159.34H1.48Z" transform="translate(-1.48 -720.54)" fill="#F9F9FF" /></svg>
            </div>
        </div>
    )
}

export default Banner
