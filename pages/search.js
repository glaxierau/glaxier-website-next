import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import SectionHead from '../components/common/Head';
import { languageToUpperCase, trimFunction } from '../helper/functions';
import { getBlogs, getPages, getServices } from '../helper/searchFunctions';
import { client } from '../hooks/getData';
import { blogsStore, pageStore, servicesStore } from '../sanity/store';



export default function Search({ data, pages, services, blogs }) {
    const { title, subtitle, searchPlaceholder, result } = data
    const [resultToShow, setResultToShow] = useState([])
    const [contain, setContain] = useState('')
    const [changed, setChanged] = useState(false)

    const hangleInput = (e) => {
        const query = e.target.value
        setContain(query)
        setChanged(true)

        //getting matching pages
        const pagesResult = getPages(pages, query)

        //getting matching services
        const servicesResult = getServices(services, query)

        //getting matching services
        const blogsResult = getBlogs(blogs, query)


        if (!query.length) setResultToShow([])
        else setResultToShow([...pagesResult, ...servicesResult, ...blogsResult])
    }

    return (
        <section className='' >
            <SectionHead title="Search" description="Search for anything" />
            <aside className='bg-purple h-[50%] lg:px-[20%] px-[5%] flex flex-col items-center justify-center py-10'>
                <h1 className='text-6xl font-extrabold text-white my-4'>{title}</h1>
                <p className='my-2 text-white'>{subtitle}</p>
                <div className='relative lg:w-[80%] w-full'>
                    <input placeholder={searchPlaceholder}
                        className='p-3 lg:px-10 px-5 lg:pr-14 pr-14 w-full text-base text-purple shadow-sm rounded-full placeholder:text-base'
                        onChange={hangleInput} />
                    <CiSearch className='absolute right-5 top-[50%] -translate-y-[50%] text-purple text-3xl' />
                </div>
                {!resultToShow.length && changed && <h2 className='text-left my-5 text-white text-2xl font-extrabold bg-purple'>Result Not Found!</h2>}
            </aside>
            {!!resultToShow.length && <aside className='py-5 pb-10 bg-purple lg:px-[10%] px-[5%]'>
                <h2 className='text-left my-5 text-white text-2xl font-extrabold'>{resultToShow.length} {result} found:</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        resultToShow.map((res, index) => {
                            return (
                                <ResultCard
                                    key={index}
                                    title={res.title}
                                    description={res.description}
                                    contain={contain}
                                    slug={res.slug}
                                />
                            )
                        })
                    }
                </div>
            </aside>}
        </section>
    )
}

const ResultCard = ({ title, description, slug, contain }) => {
    const router = useRouter()
    return (
        <a href={`/${router.locale}/${slug}#:~:text=${contain}`}>
            <div className='h-[max-content] flex flex-col bg-white justify-start items-start p-4 rounded-lg shadow-sm hover:scale-[1.01] transition-all
                    cursor-pointer'>
                <h2 className='text-purple font-extrabold text-2xl mb-2'>{title}</h2>
                <p className='text-gray-500 hover:underline text-sm'>{trimFunction(description, 150)}</p>
                <p className='mt-2 text-gray-400 text-sm italic'><b className='text-purple font-extrabold not-italic'>Contains:</b> {contain}</p>
            </div>
        </a>
    )
}

export async function getStaticProps(ctx) {
    let lang = ctx.locale
    const searchData = await client.fetch(`*[_type == 'searchPage' && __i18n_lang == $lang][0]`, { lang: languageToUpperCase(lang) })
    const pages = await pageStore(lang)
    const services = await servicesStore(lang)
    const blogs = await blogsStore(lang)
    return {
        props: {
            data: searchData,
            pages: Object.entries(pages),
            services,
            blogs
        },
    }
}





