import React, { useState } from 'react'
import Slider from 'react-slick'
import BlogCard from '../../components/cards/blogCard'


export default function Blogs() {
    const arr = Array.from(Array(20).keys())
    const [sliderStyle, setSliderStyle] = useState({
        dots: false,
        speed: 300,
        arrows: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        rows: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    return (
        <div className='w-full h-full lg:flex justify-around'>
            <Slider {...sliderStyle} arrows={true} customPaging={true} className="w-[90vw] m-auto">
                {arr.map((index) => {
                    return (
                        <BlogCard key={index} />
                    )
                })}
            </Slider>
        </div>
    )
}
