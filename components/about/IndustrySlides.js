import React from 'react'
import Slider from "react-slick";
import { about_settings } from '../../config/carousel.setting';
import Animate from '../animation/Animate';
import CarouselCard from './CarouselCard';
import style from '../../styles/dots.module.css'


const IndustrySlides = ({ clients }) => {
    return (
        <div className="lg:p-20 md:p-20 p-2 ">
            <Slider {...about_settings} dotsClass={style.dots} className="flex items-center justify-center">
                {clients.length > 0 && clients.map(client => (
                    <Animate key={client._id}>
                        <CarouselCard company={client.company} logo={client.logo.image} />
                    </Animate>
                ))}
            </Slider>
        </div>
    )
}


export default IndustrySlides
