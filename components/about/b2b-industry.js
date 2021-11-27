import React from 'react'
import Animate from '../animation/Animate'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import CarouselCard from './CarouselCard';
import style from '../../styles/dots.module.css'

const B2bIndustry = () => {

    const dots = (dots) => {
        // w-full flex items-center justify-center cursor-pointer
        // w-3 h-3 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple list-none
        return (
            <>
                <div className={styles.dots}>
                    {dots.map((item, index) => (<li key={index} onClick={() => console.log(item)} ></li>))}
                </div>
            </>
        )
    }

    const customDots = (i) => {

        return (
            <p onClick={e => console.log(e)} className={` w-3 h-3 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple`}></p>
        )
    }
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Animate>
                <Slider {...about_settings} dotsClass={style.dots}>
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
