import React from 'react'
import SectionHead from '../../components/common/Head'
import SectionTitle from '../../components/common/SectionTitle'
import Slider from "react-slick";
import ArticleCard from '../../components/articles/ArticleCard';

const paging = (i) => {
    return (
        <li className="">{i + 1}</li>
    )
}

const Blog = () => {
    let settings = {
        dots: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        slidesPerRow: 2,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
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
    //     
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
                    <Slider {...settings} className="mx-auto w-10/12">
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
