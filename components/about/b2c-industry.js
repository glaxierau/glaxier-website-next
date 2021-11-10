import React from 'react'
import Slider from "react-slick";
import { withSizeLessThan } from '../../hooks/useWindowSize';

const B2cIndustry = () => {
    let sm = withSizeLessThan(700)
    let md = withSizeLessThan(1200)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: sm && 1 || md && 2 || 3,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Slider {...settings}>
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
        <div className="w-80 h-48 bg-white shadow-sm rounded-xl p-4 m-5">
            <div className="flex items-center justify-start py-2">
                <div className="bg-gray-300 h-10 w-10 rounded-full" />
                <p className="ml-4 font-bold">Insurance</p>
            </div>
            <p className="text-black-light py-4" style={{ fontSize: '0.68rem' }}>We’ve worked on a number of travel insurance brands. The industry is extremely competitive which makes it challenging to stay on top of competitiors in the market, but also rewarding to see that we deliver results.</p>
        </div>
    )
}

export default B2cIndustry
