import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SectionHead from '../../components/common/Head'
import { languageToUpperCase, timeStamp } from '../../helper/functions'
import { urlFor } from '../../hooks/tools'
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

    console.log(blogs)

    return (
        <>
            <SectionHead
                title="Blogs"
                description="Blogs"
            />
            <div className={`${styles.blogs_grid} lg:w-[82vw] md:w-[95vw] w-[92vw] h-auto mx-auto my-4`}>
                {blogs !== [] && blogs?.map(({ title, shortDescription, featuredImage, author, _createdAt }, index) => {
                    return (
                        <div key={index} className=" bg-white shadow-sm cursor-pointer hover:scale-[1.015] transition-all">
                            <aside className="h-[65%] bg-gray-300">
                                <Image
                                    src={'https://cdn.sanity.io/images/a49e7mel/production/52c83c58c4a1dd3470e2925c3ddc8ef8e3d20cd6-5312x2988.jpg'}
                                    // src={urlFor(featuredImage.image).url()}
                                    // className="object-cover bg-no-repeat"
                                    // layout="fill"
                                    alt="test"
                                />
                            </aside>
                            <aside className={`overflow-hidden h-[35%] ${index === 0 ? 'lg:p-10 p-2' : 'p-2'}`}>
                                <h2 className={`${index === 0 ? 'lg:text-lg text-md' : 'text-md'} font-bold`}>{title}</h2>
                                <p className={`${styles.desc} text-es`}>{shortDescription}</p>
                                <div className='flex justify-end text-gray-500 absolute top-[5px] right-[10px]'>
                                    <p style={{ fontSize: 12 }}>{author}</p>
                                    <p className='ml-2' style={{ fontSize: 12 }}>{timeStamp(_createdAt)}</p>
                                </div>
                            </aside>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
