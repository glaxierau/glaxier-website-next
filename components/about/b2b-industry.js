import React from 'react'
import Animate from '../animation/Animate'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import CarouselCard from './CarouselCard';
const B2bIndustry = () => {
    // const dots = (dots) => {
    //     console.log(dots)
    //     return (
    //         <>
    //             <div className={"slick-dots"}>
    //                 {dots.map((item, index) => (<li key={index} onClick={item.onClick} className={` w-2 h-2 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple`}></li>))}
    //             </div>
    //         </>
    //     )
    // }
    const dots = () => {
        return (
            <p onClick={e => console.log(e)} className={` w-3 h-3 rounded-full m-2 bg-white-dark border border-purple hover:bg-purple`}></p>
        )
    }
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Animate>
                <Slider {...about_settings} customPaging={dots}>
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
