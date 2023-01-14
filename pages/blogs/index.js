import React, { useState } from 'react'
import Slider from 'react-slick'
import BlogCard from '../../components/cards/blogCard'
import SectionHead from '../../components/common/Head'
import styles from '../../styles/Blogs.module.css'




export default function Blogs() {
    const arr = Array.from(Array(18).keys())

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
        <>
            <SectionHead
                title="Blogs"
                description="Blogs"
            />
            <div className={`${styles.blogs_grid} lg:w-[82vw] md:w-[95vw] w-[92vw] h-auto mx-auto my-4`}>
                {arr.map((index) => {
                    return (
                        <div key={index} className="bg-white shadow-sm">
                            <aside className="h-[65%] bg-gray-300" />
                        </div>
                    )
                })}
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 bg-gray-200'>
                {/* <Slider {...sliderStyle} arrows={true} customPaging={true} className="w-[90vw] m-auto"> */}
                {/* {arr.map((index) => {
                    return (
                        <BlogCard key={index} />
                    )
                })} */}
                {/* </Slider> */}
            </div>
        </>
    )
}
