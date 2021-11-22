import React from 'react'
import Animate from '../animation/Animate'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import CarouselCard from './CarouselCard';
const B2bIndustry = () => {
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

export default B2bIndustry
