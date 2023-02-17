import Title from '../Title'
import TestimonialBox from './TestimonialBox'
import Slider from 'react-slick'
import { testimonial_settings } from '../../config/carousel.setting'
import SlideIn from '../animation/SlideIn'
import { useEng } from '../../helper/functions'
import FadeIn from '../animation/FadeIn'
import SlideInRight from '../animation/SlideInRight'

const Testimonial = ({ testimonials }) => {
    return (
        <>
            <div className="xl:h-auto lg:h-auto snap-center relative flex flex-col items-center justify-center py-20">
                <Title
                    title={useEng() ? "Testimonials" : "ข้อความรับรอง"}
                    lineColor="#9FB0E483"
                    lineWidth={180}
                />
                <div className="lg:mb-14 mb-10" />
                <div className="w-full lg:px-28 md:px-20 px-10">
                    <Slider {...testimonial_settings}>
                        {testimonials.map(({ content, client }, index) => (
                            <SlideInRight key={content[0]._key}
                                delay={index / 6}>
                                <TestimonialBox

                                    position={content[0].position}
                                    name={content[0].name}
                                    text={
                                        content[0].testimonial[0].children[0].text
                                    }
                                    image={client.logo.image}
                                />
                            </SlideInRight>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial
