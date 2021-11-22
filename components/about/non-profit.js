import React from 'react'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import Animate from '../animation/Animate';
import CarouselCard from './CarouselCard';

const NonProfit = () => {
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Animate>
                <Slider {...about_settings}>
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                </Slider>
            </Animate>
        </div>
    )
}


export default NonProfit
