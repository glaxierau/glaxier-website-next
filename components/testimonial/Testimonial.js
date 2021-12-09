import React from 'react'
import Title from '../Title'
import TestimonialBox from './TestimonialBox'
import Slider from "react-slick";
import { testimonial_settings } from '../../config/carousel.setting';


const Testimonial = ({ testimonials }) => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center lg:py-32 py-5">
                <Title title="Testimonials" lineColor="#9FB0E483" lineWidth={180} />
                <div className="lg:mb-24 mb-10" />
                <div className="w-full lg:px-28 md:px-20 px-10">
                    <Slider {...testimonial_settings} autoplay={true}>
                        {/* <TestimonialBox />
                        <TestimonialBox />
                        <TestimonialBox />
                        <TestimonialBox />
                        <TestimonialBox /> */}
                        {testimonials.map(e => <TestimonialBox key={e._id} position={e.position} name={e.name} text={e.testimonial[0].children[0].text} />)}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial
