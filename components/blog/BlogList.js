import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pagination from '../common/Pagination'
import styles from '../../styles/Blogs.module.css'
import { useRouter } from 'next/router'
import { urlFor } from '../../hooks/tools'
import { timeStamp } from '../../helper/functions'

export default function BlogList({ blogs, blogsToShow }) {
    const router = useRouter()
    const page = +router.query.page || 1

    return (
        <div>
            {/* ------------ Listing Blogs -------------- */}
            <div
                className={`${
                    blogs.length <= 2
                        ? styles.single_blog_grid
                        : styles.blogs_grid
                }
                         h-auto mx-auto my-20`}
                id="blogsList"
            >
                {blogsToShow.length !== 0 &&
                    blogsToShow[page - 1]?.map(
                        (
                            {
                                title,
                                shortDescription,
                                featuredImage,
                                _createdAt,
                                category,
                                slug,
                            },
                            index
                        ) => {
                            return (
                                slug &&
                                category?.slug && (
                                    <div
                                        key={index}
                                        className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.05] transition-all rounded-lg overflow-hidden"
                                    >
                                        <aside className="relative h-[55%]">
                                            <Link
                                                key={index}
                                                href={`/blog/${category.slug}/${slug}`}
                                                passHref
                                            >
                                                <a>
                                                    <Image
                                                        src={urlFor(
                                                            featuredImage.image
                                                        )
                                                            .height(400)
                                                            .url()}
                                                        className="object-contain bg-no-repeat"
                                                        layout="fill"
                                                        alt={
                                                            featuredImage.image
                                                                .alt
                                                        }
                                                        title={
                                                            featuredImage.image
                                                                .title
                                                        }
                                                        priority
                                                    />
                                                </a>
                                            </Link>
                                            <div className="absolute bottom-[10px] right-[10px]">
                                                <div className="bg-red-400 text-gray-500 px-4 rounded-full">
                                                    <p
                                                        className="text-white  "
                                                        style={{
                                                            fontSize: 10,
                                                        }}
                                                    >
                                                        {timeStamp(_createdAt)}
                                                    </p>
                                                </div>
                                            </div>
                                        </aside>
                                        <Link
                                            href={`/blog/${category.slug}/${slug}`}
                                            passHref
                                        >
                                            <a
                                                className={`z-30 flex flex-col justify-center items-left m-0
                                            ${
                                                index === 0
                                                    ? blogs.length <= 2
                                                        ? 'pt-[1.65rem] px-4 pb-4'
                                                        : 'lg:p-10 pt-[1.65rem] px-4 pb-4'
                                                    : 'pt-[1.65rem] px-4 pb-4'
                                            }`}
                                            >
                                                <h2
                                                    className={`${
                                                        index === 0
                                                            ? blogs.length <= 2
                                                                ? 'text-md'
                                                                : 'lg:text-xl md:text-base text-md lg:mb-2'
                                                            : 'text-md'
                                                    } font-bold text-purple truncate`}
                                                >
                                                    {title}
                                                </h2>
                                                <p
                                                    className={`${styles.desc} 
                                            ${
                                                index === 0
                                                    ? blogs.length <= 2
                                                        ? 'md:text-sm text-es'
                                                        : 'lg:text-base md:md:text-sm text-es'
                                                    : 'md:text-sm text-es'
                                            } text-gray-600`}
                                                >
                                                    {shortDescription}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            )
                        }
                    )}
            </div>
            {blogsToShow.length === 0 && (
                <p className="text-red text-center w-full">No Match Found</p>
            )}
            {/* --------- Pagination ---------- */}
            {blogsToShow.length >= 2 && (
                <Pagination items={Math.ceil(blogs.length / 8)} />
            )}
        </div>
    )
}
