import FsLightbox from 'fslightbox-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ContentMapper from '../../../components/common/ContentMapper'
import SectionHead from '../../../components/common/Head'
import { languageToUpperCase, timeStamp } from '../../../helper/functions'
import { client, getData } from '../../../hooks/getData'
import { urlFor } from '../../../hooks/tools'
import { allBlogs, similarArticles, singleBlog } from '../../../sanity/blogQueries'
import styles from '../../../styles/Blogs.module.css'

export default function SingleBlog(props) {
    const {
        _id,
        author,
        content,
        featuredImage,
        metadata,
        title,
        shortDescription,
        status,
        tags,
        _createdAt
    } = props.article

    const similarArticles = props.similar_articles
    similarArticles.filter(a => a._id !== _id)
    const [toggler, setToggler] = useState(false)
    return (
        <>
            <SectionHead title={metadata?.metaTitle} description={metadata?.metaDescription} />
            <div className={`${styles.article_style} lg:w-[70vw] md:w-[95vw] w-[92vw] m-auto`}>

                {/* ------------ Title and description -------- */}
                <div className={`${styles.title} h-auto`}>
                    <h1 className="my-4 text-purple text-3xl font-extrabold lg:w-[60%]">{title}</h1>
                    <p className='my-2 text-gray-500 mb-5'>{shortDescription}</p>

                </div>

                {/* ------------ Featured Image ------------ */}
                <div className={`${styles.fImage} relative lg:h-[400px] h-[350px]`}>
                    <Image
                        src={urlFor(featuredImage.image).height(600).url()}
                        className="object-cover bg-no-repeat rounded-lg cursor-pointer"
                        layout="fill"
                        alt={featuredImage.image.alt}
                        title={featuredImage.image.title}
                        onClick={() => setToggler(!toggler)}
                    />
                    <FsLightbox
                        toggler={toggler}
                        sources={[urlFor(featuredImage.image).url()]}
                    />
                </div>

                {/* --------------- Info ---------------*/}
                <div className={`${styles.info} text-gray-400 p-5 h-max bg-gray-50 rounded-lg`}>
                    <div><b>Author:</b> {author}</div>
                    <div><b>Created on:</b> {timeStamp(_createdAt)}</div>
                    <div>
                        <h2><b>Tags:</b></h2>
                        <div className='flex flex-wrap'>
                            {
                                tags?.map((tag, index) => {
                                    return (
                                        <p className='bg-white mr-1 my-1 rounded-full w-max px-2 shadow-sm' key={index}>{tag}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* -------------- Content --------------- */}
                <div className={`${styles.text} lg:pr-10`}>
                    <ContentMapper content={content} />
                </div>

                {/* -------------- Similar Articles ------------- */}
                <div className={`${styles.sim}`}>
                    <h2 className='font-bold text-purple text-xl mb-5'>Similar acticles</h2>
                    {similarArticles?.map(({ category, featuredImage, title, shortDescription, slug }, index) => {
                        return (
                            <Link key={index} href={`/blog/${category.slug}/${slug}`} passHref>
                                <a className={`${styles.similar_articles} bg-white shadow-sm mb-10 cursor-pointer hover:scale-[1.015] transition-all`}>
                                    <div>
                                        <aside className='relative lg:h-[120px] h-[150px]'>
                                            <Image
                                                src={urlFor(featuredImage.image).height(300).url()}
                                                className="object-cover bg-no-repeat cursor-pointer"
                                                layout="fill"
                                                alt={featuredImage.image.alt}
                                                title={featuredImage.image.title}
                                            />
                                        </aside>
                                        <aside className='w-full h-max text-gray-500 p-2 py-3'>
                                            <h2 className='text-base font-bold'>{title}</h2>
                                            <p>{shortDescription}</p>
                                        </aside>
                                    </div>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>

    )
}


export const getStaticPaths = async (ctx) => {
    let lang = languageToUpperCase(ctx.defaultLocale)
    let slugs = await client.fetch(allBlogs, { lang })
    let paths = slugs.map(slug => {
        return {
            params: { blog: slug.slug, category: slug.category.slug }
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    let slug = ctx.params.blog
    let category = ctx.params.category
    let lang = languageToUpperCase(ctx.locale)
    let props = null
    const sim_art = await client.fetch(similarArticles, { lang, category })
    const a = await client.fetch(singleBlog, { lang, slug, category })
    try {
        props = {
            similar_articles: sim_art,
            article: a
        }
    } catch (err) { throw err }
    return { props }
}

