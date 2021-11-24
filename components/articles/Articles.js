import React from 'react'
import AppButton from '../AppButton'
import Title from '../Title'
import ArticleCard from './ArticleCard'
import Loading from '../loading/Loading'

const Articles = ({ latestArticles }) => {
    return (
        <>
            {latestArticles ?
                <div className="relative lg:py-0 pt-10 h-full" id="articles">
                    <Title title="Our Latest Articles" lineColor="#CFD7F1" lineWidth={600} />
                    <div className="pb-40" />
                    <div className="bg_artboard relative py-10">
                        <div className="relative -top-32 flex items-center justify-around lg:flex-row md:flex-row flex-col w-full lg:px-14 px-2">
                            {latestArticles.map(article => <ArticleCard key={article.id} id={`${article.id}`} img={article.img} title={article.title} date={article.date} category={article.category} />)}
                        </div>
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                            <AppButton title="READ MORE" width={200} bgColor="bg-white" bgColorHover="hover:bg-red" txtColor="text-blue-dark" txtColorHover="hover:text-white" link="/blog" />
                        </div>
                    </div>
                </div>
                : <Loading />}

            <style jsx>
                {`
                .bg_image{
                    width: 100vw;
                    height: 500px;
                    object-fit: cover;
                }
                .bg_artboard{
                    background-image: url('/assets/img/home/articlebg.png');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: auto;
                    /* height: 500px; */
                }
                @media screen and (max-width: 720px) {
                    .bg_image {
                        height: 1000px
                    }
                }
            `}
            </style>
        </>
    )
}

export default Articles
