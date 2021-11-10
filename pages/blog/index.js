import React from 'react'
import SectionHead from '../../components/common/Head'
import SectionTitle from '../../components/common/SectionTitle'
import Slider from "react-slick";
import ArticleCard from '../../components/articles/ArticleCard';
import { blog_settings } from '../../config/carousel.setting';

const pagination = (i) => {
    return (
        <ul>
            <li className="">{i + 1}</li>
        </ul>
    )
}

const Blog = () => {

    return (
        <>
            <div>
                <SectionHead title="Blog" />
                <div className="py-2">
                    <img src="/shape.svg" alt="glaxier shape" />
                    <SectionTitle title="BLOG" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                </div >
                <div className="bg-white-dark -mt-6 pt-10 py-40">
                    <Slider {...blog_settings} className="mx-auto w-10/12" customPaging={pagination}>
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
