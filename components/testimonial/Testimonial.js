import Title from '../Title'
import TestimonialBox from './TestimonialBox'
import Slider from 'react-slick'
import { testimonial_settings } from '../../config/carousel.setting'
import SlideIn from '../animation/SlideIn'

const Testimonial = ({ testimonials }) => {
    const style = {
        height: '100vh',
    }
    return (
        <>
            <div className="xl:h-cscreen lg:h-cscreen snap-center relative flex flex-col items-center justify-center lg:py-32 py-5">
                <Title
                    title="Testimonials"
                    lineColor="#9FB0E483"
                    lineWidth={180}
                />
                <div className="lg:mb-24 mb-10" />
                <SlideIn className="w-full lg:px-28 md:px-20 px-10">
                    <Slider {...testimonial_settings}>
                        {testimonials.map(({ content, logo }) => (
                            <TestimonialBox
                                key={content[0]._key}
                                position={content[0].position}
                                name={content[0].name}
                                text={
                                    content[0].testimonial[0].children[0].text
                                }
                                image={logo.image}
                            />
                        ))}
                    </Slider>
                </SlideIn>
            </div>
        </>
    )
}

export default Testimonial
