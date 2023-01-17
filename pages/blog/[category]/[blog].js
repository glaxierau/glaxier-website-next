import FsLightbox from 'fslightbox-react'
import Image from 'next/image'
import React, { useState } from 'react'
import ContentMapper from '../../../components/common/ContentMapper'
import SectionHead from '../../../components/common/Head'
import { languageToUpperCase, timeStamp } from '../../../helper/functions'
import { client, getData } from '../../../hooks/getData'
import { urlFor } from '../../../hooks/tools'
import { allBlogs, singleBlog } from '../../../sanity/blogQueries'
import styles from '../../../styles/Blogs.module.css'

export default function SingleBlog(props) {
    const {
        author,
        category,
        content,
        featuredImage,
        metadata,
        title,
        shortDescription,
        status,
        tags,
        _createdAt
    } = props

    const [toggler, setToggler] = useState(false)

    return (
        <>
            <SectionHead title={metadata.metaTitle} description={metadata.metaDescription} />
            <div className={`${styles.article_style} lg:w-[70vw] md:w-[95vw] w-[92vw] m-auto`}>
                <div className='h-[500px]'>
                    <h1 className="my-4 text-purple text-3xl font-extrabold lg:w-[60%]">{title}</h1>
                    <p className='my-2 text-gray-500 mb-5'>{shortDescription}</p>
                    <div className='relative lg:h-[400px] h-[350px]'>
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
                </div>
                <div className='text-gray-400 p-5 h-max bg-gray-50 rounded-lg lg:mt-32'>
                    <div><b>Author:</b> {author}</div>
                    <div><b>Created on:</b> {timeStamp(_createdAt)}</div>
                    <div>
                        <h2><b>Tags:</b></h2>
                        <div className='flex flex-wrap'>
                            {
                                tags?.map((tag, index) => {
                                    return (
                                        <p className='bg-white m-1 rounded-full w-max px-2 shadow-sm' key={index}>{tag}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='lg:pt-10 md:pt-5 lg:pr-10 leading-8'>
                    <ContentMapper content={content} />
                </div>
                <div>
                    <h2 className='font-bold text-purple text-xl'>Similar acticles</h2>
                    {Array.from(Array(4).keys()).map((index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.similar_articles} bg-white shadow-sm my-10 cursor-pointer hover:scale-[1.015] transition-all`}
                            >
                                <div className='h-[65%] bg-gray-300' />
                            </div>
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
    try {
        props = await client.fetch(singleBlog, { lang, slug, category })
    } catch (err) { throw err }
    return { props }
}





const text =
    `Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<b />
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br />
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`