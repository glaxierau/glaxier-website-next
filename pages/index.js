import Head from '../components/common/Head'
import About from '../components/about/About'
import Banner from '../components/Banner'
import Client from '../components/client/Client'
import Project from '../components/project/Project'
import Service from '../components/service/Service'
import Testimonial from '../components/testimonial/Testimonial'
import { client } from '../hooks/getData'
import BlogList from '../components/blog/BlogList'
import { homeQuery } from '../sanity/pagesQuery'
import { homeBlogs } from '../sanity/blogQueries'
import { languageToUpperCase, useEng } from '../helper/functions'
import Title from '../components/Title'
import Link from 'next/link'


export default function Home(props) {
    const { home, blogsProps } = props
    return (
        <div>
            <Head
                title={home?.pageInfo.metadata.metaTitle}
                description={home?.pageInfo.metadata.mataDescription}
            />
            <Banner {...home} />
            <Service {...home?.serviceSection} {...home?.introductionSection} />
            <About withButton={true} {...home?.aboutSection} />
            <Client {...home} />
            <Testimonial testimonials={home?.testimonialSection.testimonials} />
            <Project {...home?.ctaBreakSection} />

            {/* Blogs */}
            <div className='grid lg:w-[80vw] md:w-[95vw] w-[92vw] mx-auto mt-20'>
                <Title title={useEng() ? 'Blog' : 'บล็อก'} lineWidth={100} />
                <br />
                <br />
                <BlogList blogs={blogsProps[0]} blogsToShow={blogsProps} />
                <Link href='/blog' passHref>
                    <p className='text-white text-base mx-auto mb-10 bg-purple px-10 
                    rounded-lg cursor-pointer hover:scale-[1.05] transition-all py-1'
                    >{useEng() ? 'See More' : 'ดูเพิ่มเติม'}</p>
                </Link>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    // ----------------- Data Fetching --------------------
    const lang = context.locale
    const home = await client.fetch(homeQuery, { lang })
    const blogsProps = await client.fetch(homeBlogs, { lang: languageToUpperCase(lang) })

    return {
        props: {
            home,
            blogsProps: [blogsProps]
        }
    }
}
