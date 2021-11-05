import React from 'react'
import Title from '../title'
import TestimonialBox from './TestimonialBox'
import Slider from "react-slick";
import useWindowSize, { mobileScreen, withSizeLessThan } from '../../hooks/useWindowSize';

const Testimonial = () => {
    let sm = withSizeLessThan(700)
    let md = withSizeLessThan(1200)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: sm && 1 || md && 2 || 3,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <div>
            <div className="relative flex flex-col items-center justify-center lg:py-32 py-5">
                <Title title="Testimonials" lineColor="#9FB0E483" lineWidth={180} />
                <div className="lg:mb-24 mb-10" />
                {/* <div className="lg:flex w-full items-center justify-around lg:px-20 px-2 hidden">
                    <TestimonialBox />
                    <TestimonialBox />
                    <TestimonialBox />
                </div> */}
                <div className={`w-full lg:px-32 md:px-30 px-10`}>
                    <div>
                        <Slider {...settings}>
                            <TestimonialBox />
                            <TestimonialBox />
                            <TestimonialBox />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
