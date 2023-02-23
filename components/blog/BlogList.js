import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Pagination from '../common/Pagination'
import styles from '../../styles/Blogs.module.css'
import { useRouter } from 'next/router'
import { urlFor } from '../../hooks/tools'
import { timeStamp } from '../../helper/functions'
import FadeIn from '../animation/FadeIn'
import ScaleIn from '../animation/ScaleIn'



export default function BlogList({ blogs, blogsToShow, }) {
    const router = useRouter()
    const page = +router.query.page || 1

    return (
        <div>

            {/* ------------ Listing Blogs -------------- */}
            <div className={`${blogs.length <= 2 ? styles.single_blog_grid : styles.blogs_grid}
                         h-auto mx-auto mb-20`} id='blogsList'>
                {blogsToShow.length !== 0 && blogsToShow[page - 1]?.map(({ title, shortDescription, featuredImage, _createdAt, category, slug }, index) => {
                    return (
                        <Link key={index} href={`/blog/${category?.slug}/${slug}`} passHref>

                            <ScaleIn className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all rounded-lg overflow-hidden"
                                delay={index / 10}
                            >

                                <aside className="relative h-[55%] bg-gray-300">
                                    <Image
                                        src={urlFor(featuredImage.image).height(400).url()}
                                        className="object-cover bg-no-repeat"
                                        layout="fill"
                                        alt={featuredImage.image.alt}
                                        title={featuredImage.image.title}
                                        priority
                                    />
                                    <div className='bg-white text-gray-500 absolute bottom-[10px] right-[10px] px-4 rounded-full'>
                                        <p className='text-gray-400 ' style={{ fontSize: 10 }}>{timeStamp(_createdAt)}</p>
                                    </div>
                                </aside>
                                <aside className={`overflow-hidden h-[45%] z-30 flex flex-col justify-center items-left
                                            ${index === 0 ? blogs.length <= 2 ? 'p-4' : 'lg:p-10 p-4' : 'p-4'}`}>
                                    <h2 className={`${index === 0 ? blogs.length <= 2 ? 'text-md' : 'lg:text-xl md:text-base text-md lg:mb-2' : 'text-md'} font-bold text-purple`}>
                                        {title}
                                    </h2>
                                    <p className={`${styles.desc} 
                                            ${index === 0 ? blogs.length <= 2 ? 'md:text-sm text-es' : 'lg:text-base md:md:text-sm text-es' : 'md:text-sm text-es'} text-gray-600`}
                                    >{shortDescription}</p>
                                </aside>
                            </ScaleIn>
                        </Link>
                    )
                })}
            </div>
            {blogsToShow.length === 0 && <p className='text-red text-center w-full'>No Match Found</p>}
            {/* --------- Pagination ---------- */}
            {blogsToShow.length >= 2 && <Pagination items={Math.ceil(blogs.length / 8)} />}
        </div>
    )
}
