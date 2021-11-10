import React from 'react'
import SectionHead from '../../components/common/Head'
import SectionTitle from '../../components/common/SectionTitle'
import Slider from "react-slick";
import ArticleCard from '../../components/articles/ArticleCard';
import { withSizeLessThan } from '../../hooks/useWindowSize';


const paging = (i) => {
    return (
        <li className="">{i + 1}</li>
    )
}

const Blog = () => {
    let sm = withSizeLessThan(700)
    let md = withSizeLessThan(1200)

    let settings = {
        // customPaging: paging,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        slidesPerRow: 2,
        // centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // var settings = {
    //     customPaging: paging,
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: sm && 1 || md && 2 || 3,
    //     slidesToScroll: 1,
    //     slidesPerRow: 2,
    //     arrows: false,
    //     centerMode: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        <>
            <div>
                <SectionHead title="Blog" />
                <div className="py-2">
                    <img src="/shape.svg" alt="glaxier shape" />
                    <SectionTitle title="BLOG" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                </div >
                <div className="bg-white-dark -mt-6 pt-10 py-40">
                    <Slider {...settings} className="mx-auto w-11/12 lg:px-20 md:px-10 px-4">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </Slider>
                </div>
            </div>
            <style jsx>{`
                
            `}</style>
        </>
    )
}

export default Blog
