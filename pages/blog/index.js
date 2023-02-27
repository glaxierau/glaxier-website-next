import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import SectionHead from '../../components/common/Head'
import { languageToUpperCase, makeFirstCharUpperCase, overrideDoubbledArray, splitArrayIntoChunks, timeStamp } from '../../helper/functions'
import { client } from '../../hooks/getData'
import { blogs, tagsQuery } from '../../sanity/blogQueries'
import { TfiArrowCircleDown } from 'react-icons/tfi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import BlogList from '../../components/blog/BlogList'



export default function Blogs(props) {
    const router = useRouter()
    const [tags, setTags] = useState(props.tagsArr)
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

    const onSearchingForBlogs = (e) => {
        const input = e.target.value.toUpperCase()
        const filteredBLogs = blogs.filter(blog => {
            if (blog.title.toUpperCase().includes(input)) {
                return blog.title.toUpperCase().includes(input)
            } else return
        })
        setBlogsToShow(splitArrayIntoChunks(filteredBLogs))
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
            <div className={`lg:w-[75vw] md:w-[95vw] w-[92vw] h-auto mx-auto mt-10`}>
                <h1 className={`text-[50px] font-extrabold text-purple ${page !== 1 && 'hidden'}`}>Blog</h1>
                <p className={`my-5 mb-5 lg:w-[60%] w-full ${page !== 1 && 'hidden'}`}>Check out our blogs, you can filter the blogs using our tags. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                {/* ---- Search element for blogs ---- */}
                <div className='lg:w-[72%] w-full'>
                    <div className='flex justify-between items-center '>
                        <input
                            placeholder='Search for blogs'
                            className={`border-[1px] py-2 px-5 placeholder:text-base text-base font-light rounded-lg focus:border-purple w-full text-purple my-2`}
                            onChange={(e) => onSearchingForBlogs(e)}
                        />
                        <FiSearch className='text-[30px] text-purple ml-4' />
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-[3fr_1fr] grid-cols-1 lg:w-[75vw] md:w-[95vw] w-[92vw] mx-auto gap-10 my-10'>

                {/* ---------- Blog List -------------- */}
                <BlogList blogs={blogs} blogsToShow={blogsToShow} />

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
                        <section className={`my-4 py-2 transition-all ${router.query.tags ? 'border-b-2' : 'hidden'}`}>
                            <div className='flex flex-wrap'>
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
                            </div>
                            <p className={`mx-auto items-end text-red w-max px-2 rounded-full  text-[12px] cursor-pointer hover:underline transition-all`}
                                onClick={() => {
                                    setTagChunk(10)
                                    router.push({ pathname: router.pathname, query: {} })
                                }}>
                                Remove all
                            </p>
                        </section>

                        {/* List of tags */}
                        <div className={`flex flex-wrap lg:justify-start justify-center items-center`}>
                            {tags?.sort().slice(0, tagChunk).map((tag, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`py-2 px-2 text-sm shadow m-1 ml-0 mr-2 hover:bg-purple hover:text-white cursor-pointer rounded-lg
                                        ${router?.query?.tags?.includes(tag) ? 'bg-purple text-white' : 'bg-white text-gray-500'}`}
                                        onClick={() => onAddingSelectedTags(tag)}>
                                        {tag}
                                    </div>
                                )
                            })}
                            {tags.length === 0 && <p className='text-red text-sm text-center w-full'>No result found</p>}
                        </div>

                        {/* ----------- Tags see more button ------------ */}
                        <section className='flex justify-center items-center mx-2'>
                            <div className='flex flex-col lg:my-5 my-2 justify-center items-center'>
                                <p className={`text-center text-purple text-sm px-2 rounded-lg cursor-pointer underline transition-all
                            ${tagChunk === 10 ? 'hidden' : 'flex'}`}
                                    onClick={() => setTagChunk(tagChunk - 10)}>See Less</p>
                            </div>
                            <div className='flex flex-col lg:my-5 my-2 justify-center items-center'>
                                <p className={`text-center text-purple text-sm px-2 rounded-lg cursor-pointer underline transition-all 
                            ${tagChunk > tags.length ? 'hidden' : 'flex'}`}
                                    onClick={() => setTagChunk(tagChunk + 10)}>See More</p>
                            </div>
                        </section>
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