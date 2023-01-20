import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import SectionHead from '../../components/common/Head'
import Pagination from '../../components/common/Pagination'
import { languageToUpperCase, makeFirstCharUpperCase, overrideDoubbledArray, splitArrayIntoChunks, timeStamp } from '../../helper/functions'
import { client } from '../../hooks/getData'
import { urlFor } from '../../hooks/tools'
import { blogs, tagsQuery } from '../../sanity/blogQueries'
import styles from '../../styles/Blogs.module.css'
import { TfiArrowCircleDown } from 'react-icons/tfi'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Blogs(props) {
    const router = useRouter()
    const [tags, setTags] = useState(props.tagsArr)
    const [selectedTags, setSelectedTags] = useState([])
    const [tagChunk, setTagChunk] = useState(10)
    const [blogsToShow, setBlogsToShow] = useState([])
    const [blogs, setBlogs] = useState(props.blogs)
    const [openTag, setOpenTag] = useState(false)
    const page = +router.query.page || 1
    const perChunk = 9

    useEffect(() => {

        // ----- Filter blogs by tags -----
        const filteredByTags = props.blogs.filter((blog) => {
            const tagsURL = router?.query?.tags
            let blogExists, tagsToArray;
            if (tagsURL) {
                tagsToArray = !tagsURL?.includes(',') ? [tagsURL] : tagsURL.split(',')
                blogExists = blog.tags.some(element => {
                    return tagsToArray.includes(element);
                })
            }
            if (blogExists) return blog
            else return false
        })

        // ----- See whether tag exists or not ----
        const toUse = filteredByTags.length === 0 ? props.blogs : filteredByTags

        // ------ Set blogs to show -------
        setBlogsToShow(splitArrayIntoChunks(toUse, perChunk))
        setBlogs(toUse)
    }, [router.query, page, props.blogs])


    // ----- Removing Tags Query from URL ------
    useEffect(() => {
        // if tags is empty but still exists in the URL
        if (router.query.tags === '')
            router.push('/blog')
    })



    const onSearchingForTag = (e) => {
        const value = e.target.value.toUpperCase()
        const toUpperCase = props.tagsArr.map(tag => tag.toUpperCase())
        const filtered = toUpperCase.sort().filter(tag => tag.includes(value))
        const backToNormalCase = filtered.map(tag => makeFirstCharUpperCase(tag))
        setTags(backToNormalCase)
    }


    // ----------  Adding a tag -----------
    const onAddingSelectedTags = (tag) => {
        const tagsQuery = router?.query?.tags || ''
        let queries = [...tagsQuery?.split(','), tag].toString()

        // If a tag already contains a similar tag in the query, remove it
        if (tagsQuery.includes(tag)) return onDeletingSelectedTag(tag)
        // If a tag is undefined, we add a tag
        if (!tagsQuery)
            router.push({ pathname: router.pathname, query: { ...router.query, tags: tag } })
        // If a couple of tags already exist, we want to add an additional tag
        else if (tagsQuery.includes(','))
            // Turn the tags into an array, add additional tag to the array and finally turn the array into a string again
            router.push({ pathname: router.pathname, query: { ...router.query, tags: queries } })
        // If one tag exists and no previous tag is similar to the current selected tag
        else
            router.push({ pathname: router.pathname, query: { ...router.query, tags: queries } })

    }

    const onDeletingSelectedTag = (tag) => {
        const stringToArray = router?.query.tags.split(',')
        const filteredTags = stringToArray.filter(t => t !== tag)
        if (router.query.tags === '')
            router.replace('/blog')
        else {
            router.push(
                {
                    pathname: router.pathname,
                    query: { tags: filteredTags.toString() }
                })

        }
    }


    return (
        <>
            <SectionHead
                title="Blog"
                description="Blog"
            />
            {/* ---------- Title ------------ */}
            <div className={`lg:w-[75vw] md:w-[95vw] w-[92vw] h-auto mx-auto mt-10 ${page !== 1 && 'hidden'}`}>
                <h1 className='text-[50px] font-extrabold text-purple'>Blog</h1>
                <p className='my-5 mb-5 lg:w-[60%] w-full'>Check out our blogs, you can filter the blogs using our tags. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
            <div className='grid lg:grid-cols-[3fr_1fr] grid-cols-1 lg:w-[75vw] md:w-[95vw] w-[92vw] mx-auto gap-10 my-10'>
                <div>

                    {/* ------------ Listing Blogs -------------- */}
                    <div className={`${blogs.length <= 2 ? styles.single_blog_grid : styles.blogs_grid}
                         h-auto mx-auto mb-20`} id='blogsList'>
                        {blogsToShow.length !== 0 && blogsToShow[page - 1]?.map(({ title, shortDescription, featuredImage, _createdAt, category, slug }, index) => {
                            return (
                                <Link key={index} href={`/blog/${category.slug}/${slug}`} passHref>
                                    <div className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all rounded-lg overflow-hidden">
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
                                            <h2 className={`${index === 0 ? blogs.length <= 2 ? 'text-md' : 'lg:text-xl md:text-base text-md lg:mb-2' : 'text-md'} font-bold`}>
                                                {title}
                                            </h2>
                                            <p className={`${styles.desc} 
                                            ${index === 0 ? blogs.length <= 2 ? 'md:text-sm text-es' : 'lg:text-base md:md:text-sm text-es' : 'md:text-sm text-es'}`}
                                            >{shortDescription}</p>
                                        </aside>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {/* --------- Pagination ---------- */}
                    {blogs.length === 0 && <p className='w-full text-center text-purple my-10'>No blog found!...</p>}
                    {blogs.length >= 9 && <Pagination items={Math.ceil(blogs.length / 8)} />}
                </div>

                {/* ---------- Tags -------------- */}
                <div className='mx-auto py-5 px-5 rounded-lg lg:order-1 -order-1 w-full bg-gray-50 h-max'>
                    <div className='flex justify-between text-purple text-xl font-bold justify-left items-center'>
                        <h2>Tags:</h2>
                        <TfiArrowCircleDown
                            className={`cursor-pointer hover:scale-[1.1] lg:hidden md:block block transition-all ${!openTag ? 'rotate-180' : 'rotate-0'}`}
                            onClick={() => setOpenTag(!openTag)}
                        />
                    </div>
                    <section className={`${!openTag ? 'hidden' : 'block'} ${!openTag && 'lg:block md:hidden hidden'}`}>

                        {/* Tags search bar */}
                        <input
                            placeholder='Search for a tag...'
                            className={`border-[1px] py-2 px-2 placeholder:text-sm text-base font-light mt-5 rounded-lg focus:border-purple w-full text-purple
                            ${router.query.tags ? 'mb-0' : 'mb-4'}`}
                            onChange={(e) => onSearchingForTag(e)} />

                        {/* Selected tags */}
                        <section className={`my-4 flex flex-wrap py-2 transition-all ${router.query.tags ? 'border-b-2' : 'hidden'}`}>
                            {
                                router?.query?.tags?.split(',')?.map((tag, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`relative py-2 px-2 text-sm text-gray-700 w-max bg-white shadow m-1 mx-2 ml-0 cursor-pointer rounded-lg transition-all`}
                                        >
                                            {tag}
                                            <AiFillCloseCircle
                                                className='absolute -top-[4px] -right-[4px] text-[16px] text-gray-400 hover:text-red hover:scale-[1.1] transition-all opacity-30 hover:opacity-100'
                                                onClick={() => onDeletingSelectedTag(tag)}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </section>

                        {/* List of tags */}
                        <div className={`flex flex-wrap lg:justify-start justify-center items-center`}>
                            {tags?.sort().slice(0, tagChunk).map((tag, index) => {
                                return (
                                    <div key={index} className={`py-2 px-2 text-sm bg-white shadow m-1 ml-0 mr-2 hover:bg-purple hover:text-white cursor-pointer rounded-lg active:bg-purple
                                        ${router?.query?.tags?.includes(tag) ? 'bg-purple text-white' : 'text-gray-500'}`}
                                        onClick={() => onAddingSelectedTags(tag)}>
                                        {tag}
                                    </div>
                                )
                            })}
                            {tags.length === 0 && <p className='text-red text-sm text-center w-full'>No result found</p>}
                        </div>

                        {/* ----------- Tags see more button ------------ */}
                        <div className='flex flex-col lg:my-5 my-4 justify-center items-center'>
                            <p className={`text-center text-purple text-sm px-2 rounded-lg cursor-pointer hover:scale-[1.02] transition-all bg-white mb-2
                            ${tagChunk > tags.length ? 'hidden' : 'flex'}`}
                                onClick={() => setTagChunk(tagChunk + 10)}>See More</p>
                            <p className={`text-center text-red text-sm cursor-pointer hover:underline`}
                                onClick={() => {
                                    setTagChunk(10)
                                    router.push({ pathname: router.pathname, query: {} })
                                }}>
                                Reset
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}


export const getStaticProps = async (req, res) => {
    let lang = languageToUpperCase(req.locale)
    const blogsList = await client.fetch(blogs, { lang })
    const tagsArr = await client.fetch(tagsQuery, { lang })

    // ------- Putting all tags together --------
    const rawTags = tagsArr.map(tag => tag.tags) || []
    const flattenArr = rawTags?.flat(1).sort()
    let tagsProps = overrideDoubbledArray(flattenArr)

    return { props: { tagsArr: tagsProps, blogs: blogsList } }
}