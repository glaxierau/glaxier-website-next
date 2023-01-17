import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SectionHead from '../../components/common/Head'
import Pagination from '../../components/common/Pagination'
import { languageToUpperCase, timeStamp } from '../../helper/functions'
import { urlFor } from '../../hooks/tools'
import styles from '../../styles/Blogs.module.css'


export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [blogsLength, setBlogsLength] = useState(0)
    const router = useRouter()
    const page = +router.query.page || 1

    useEffect(() => {
        const lang = languageToUpperCase(router.locale)
        const fetchBlogs = async () => {
            await fetch('/api/blogs?' + new URLSearchParams({
                lang,
                page
            }))
                .then(res => res.text())
                .then(res => {
                    setBlogs(JSON.parse(res).blogsToShow)
                    setBlogsLength(JSON.parse(res).blogList.length)
                })
        }
        fetchBlogs()
    }, [page, router.locale])

    console.log(blogs)


    return (
        <>
            <SectionHead
                title="Blog"
                description="Blog"
            />
            <div className={`lg:w-[75vw] md:w-[95vw] w-[92vw] h-auto mx-auto ${page !== 1 && 'hidden'}`}>
                <h1 className='text-[50px] font-extrabold text-purple mt-10'>Blogs</h1>
                <p className='my-5 mb-14 lg:w-[60%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className={`${styles.blogs_grid} lg:w-[75vw] md:w-[95vw] w-[92vw] h-auto mx-auto my-4`}>
                {blogs.length !== 0 && blogs?.map(({ title, shortDescription, featuredImage, _createdAt, category, slug }, index) => {
                    return (
                        <Link key={index} href={`/blog/${category.slug}/${slug}`} passHref>
                            <div className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all">
                                <aside className="relative h-[65%] bg-gray-300">
                                    <Image
                                        src={urlFor(featuredImage.image).height(400).url()}
                                        className="object-cover bg-no-repeat"
                                        layout="fill"
                                        alt={featuredImage.image.alt}
                                        title={featuredImage.image.title}
                                    />
                                    <div className='bg-white text-gray-500 absolute bottom-[10px] right-[10px] px-4 rounded-full'>
                                        <p className='text-gray-400 ' style={{ fontSize: 10 }}>{timeStamp(_createdAt)}</p>
                                    </div>
                                </aside>
                                <aside className={`overflow-hidden h-[35%] z-30 ${index === 0 ? 'lg:p-10 p-2' : 'p-2'}`}>
                                    <h2 className={`${index === 0 ? 'lg:text-xl md:text-base text-md lg:mb-2' : 'text-md'} font-bold`}>
                                        {title}
                                    </h2>
                                    <p className={`${styles.desc} 
                                    md:text-sm text-es 
                                    ${index === 0 && 'lg:text-base md:md:text-sm text-es'}`}
                                    >{shortDescription}</p>
                                </aside>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {blogs.length === 0 && <p className='w-full text-center text-purple'>No blogs to show</p>}
            <Pagination items={Math.ceil(blogsLength / 8)} />
        </>
    )
}
