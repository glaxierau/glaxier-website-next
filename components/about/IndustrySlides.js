import React from 'react'
import Slider from 'react-slick'
import { about_settings } from '../../config/carousel.setting'
import Animate from '../animation/Animate'
import CarouselCard from './CarouselCard'
import style from '../../styles/dots.module.css'
import SlideIn from '../animation/SlideIn'
import { motion } from 'framer-motion'
import SlideInRight from '../animation/SlideInRight'

const IndustrySlides = ({ contents }) => {
    return (
        <SlideIn className=" lg:p-20 md:p-20 p-2 ">
            <Slider
                {...about_settings}
                className="flex items-center justify-center"
            >
                {contents.map((c, index) => (
                    <SlideInRight key={c._id} delay={index / 20}>
                        <CarouselCard
                            company={c.content.company}
                            text={
                                c.content.description ||
                                'Stay tuned for the next update :)'
                            }
                            logo={c.logo.image}
                        />
                    </SlideInRight>
                ))}
            </Slider>
        </SlideIn>
    )
}

export default IndustrySlides
