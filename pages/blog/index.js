import React from 'react'
import SectionHead from '../../components/common/Head'
import SectionTitle from '../../components/common/SectionTitle'
import Slider from "react-slick";
import ArticleCard from '../../components/articles/ArticleCard';
import { blog_settings } from '../../config/carousel.setting';
import absoluteUrl from 'next-absolute-url'

const pagination = (i) => {
    return (
        <ul>
            <li className="">{i + 1}</li>
        </ul>
    )
}

const Blog = ({ articles }) => {
    return (
        <>
            <div>
                <SectionHead title="Blog | Glaxier" />
                <div className="py-2">
                    <SectionTitle title="BLOG" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                </div >
                <div className="bg-white-dark -mt-6 pt-10 py-40">
                    <Slider {...blog_settings} className="mx-auto w-10/12" customPaging={pagination}>
                        {articles.map(article => <ArticleCard key={article.id} id={article.id} img={article.img} title={article.title} date={article.date} category={article.category} />)}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    const { origin } = absoluteUrl(req)
    const response = await fetch(`${origin}/api/blogs`).then(response => response.json())
    return { props: { articles: response } }
}
export default Blog
