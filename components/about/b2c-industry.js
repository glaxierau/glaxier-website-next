import React from 'react'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import Animate from '../animation/Animate';
import CarouselCard from './CarouselCard';
import style from '../../styles/dots.module.css'


const B2cIndustry = () => {

    const dots = (dots) => {
        // w-full flex items-center justify-center cursor-pointer
        // w-3 h-3 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple list-none
        return (
            <div className={style.dots}>
                {dots.map((item, index) => <li className={style.active} key={index}></li>)}
            </div>
        )
    }

    const customPaging = (slider, i) => {
        return (
            <div className="w-full flex items-center justify-center cursor-pointer">
                <button className={"w-3 h-3 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple list-none"}></button>
            </div>
        )
    }

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


export default B2cIndustry
