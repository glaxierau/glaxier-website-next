import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SectionHead from '../../components/common/Head'
import { languageToUpperCase, timeStamp } from '../../helper/functions'
import { urlFor, useSanityImage } from '../../hooks/tools'
import styles from '../../styles/Blogs.module.css'


export default function Blogs() {
    const arr = Array.from(Array(10).keys())
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(1)
    const router = useRouter()

    useEffect(() => {
        const lang = languageToUpperCase(router.locale)
        const fetchBlogs = async () => {
            const result = await fetch('/api/blogs?' + new URLSearchParams({
                lang
            }))
                .then(res => res.text())
                .then(res => setBlogs(JSON.parse(res)))
        }
        fetchBlogs()
    }, [1])

    return (
        <>
            <SectionHead
                title="Blogs"
                description="Blogs"
            />
            <div className={`${styles.blogs_grid} lg:w-[75vw] md:w-[95vw] w-[92vw] h-auto mx-auto my-4`}>
                {blogs.length !== 0 && blogs?.map(({ title, shortDescription, featuredImage, author, _createdAt }, index) => {
                    console.log(featuredImage.image.alt)
                    return (
                        <div key={index} className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all">
                            <aside className="relative h-[65%] bg-gray-300">
                                <Image
                                    src={urlFor(featuredImage.image).height(400).url()}
                                    className="object-cover bg-no-repeat"
                                    layout="fill"
                                    // width={`100%`}
                                    // height={`100%`}
                                    alt={featuredImage.image.alt}
                                    title={featuredImage.image.title}
                                />
                                <div className='bg-white text-gray-500 absolute bottom-[10px] right-[10px] px-4 rounded-full'>
                                    {/* <p style={{ fontSize: 12 }}>{author}</p> */}
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
                    )
                })}
            </div>
        </>
    )
}
