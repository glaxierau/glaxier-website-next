import React from 'react'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';

const B2cIndustry = () => {
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Slider {...about_settings}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Slider>
        </div>
    )
}

const Card = () => {
    return (
        <div className="h-48 bg-white shadow-sm rounded-xl p-4 m-8">
            <div className="flex items-center justify-start py-2">
                <div className="bg-gray-300 h-10 w-10 rounded-full" />
                <p className="ml-4 font-bold">Insurance</p>
            </div>
            <p className="text-black-light py-4" style={{ fontSize: '0.68rem' }}>We’ve worked on a number of travel insurance brands. The industry is extremely competitive which makes it challenging to stay on top of competitiors in the market, but also rewarding to see that we deliver results.</p>
        </div>
    )
}

export default B2cIndustry
