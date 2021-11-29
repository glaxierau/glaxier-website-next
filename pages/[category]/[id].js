import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import SectionHead from '../../components/common/Head'
import absoluteUrl from 'next-absolute-url'

const SingleArticlePage = ({ articles }) => {
    const router = useRouter()
    const { id } = router.query
    const IntId = parseInt(id)
    const article = articles.filter(article => article.id === IntId)[0]
    const md = withSizeLessThan(1030)
    const brands = ["facebook", "linkedin", "instagram"]
    return (
        <div className="blog h-auto">
            <SectionHead title={`Blog | ${article.title} `} />
            <img src="/assets/svg/shape.svg" className="w-full" />
            <div className="lg:px-32 md:px-24 px-4 pb-10  bg-white-dark">
                <img src={article.img} width={md ? 400 : 600} className="lg:float-left md:float-none lg:block md:hidden hidden float-none mr-5 mb-5" />
                <div className="px-2 lg:-mt-5 mt-0 ">
                    <p className="text-black-light">{article.date}</p>
                    <h3 className="py-2 text-red xl:text-3xl lg:text-2xl text-xl font-bold">{article.title}</h3>
                    <div className="flex items-center justify-start mt-2 mb-8">
                        <p className="mr-1 text-black-light">Share</p>
                        {brands.map(brand => <img key={brand} src={`/assets/svg/${brand}.svg`} width={20} className="m-1" />)}
                    </div>
                    <img src={article.img} width={600} className="lg:float-left md:float-none lg:hidden block float-none mr-5 mb-8" />
                    {article.content.map(content => <p key={content} style={{ color: '#707070' }} className="pb-8">{content}</p>)}
                </div>
            </div>
        </div>
    )
}

SingleArticlePage.getInitialProps = async ({ req, res }) => {
    const { origin } = absoluteUrl(req)
    const response = await fetch(`${origin}/api/blogs`).then(response => response.json())
    return { articles: response }
}

export default SingleArticlePage