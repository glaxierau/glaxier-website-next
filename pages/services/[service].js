import React from 'react'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import BlockContent from '../../components/BlockContent/BlockContent'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'
import { motion } from 'framer-motion'
import { Step } from '../../components/service/Steps'

function SingleService(props) {
    const { topSection, pageInfo } = props
    let image = useSanityImage(topSection.serviceImage.image)
    let icon = useSanityImage
    return (
        <div className="flex lg:flex-row flex-col ">
            <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.mataDescription} />
            <div className="w-full relative">
                <div className="lg:h-cscreen w-full h-44 object-cover">
                    <Img {...image} layout='fill' objectFit='cover' alt="meeting" />
                </div>
                <div className='lg:hidden grid absolute -bottom-1 w-screen'>
                    <Img src="/assets/svg/shape.svg" alt="Shape for services" layout='responsive' width={100} height={16} />
                </div>
            </div>
            <motion.section initial={{ x: 30 }} animate={{ x: 0 }} transition={{ duration: 0.1 }} className="w-full lg:h-cscreen h-auto bg-white-dark relative flex lg:justify-center justify-start items-center flex-col">
                <div className="hidden lg:flex absolute h-cscreen w-[10rem] -left-[9rem] z-10">
                    <Img src="/assets/svg/services.svg" alt="Shape for services" layout='fill' objectFit='cover' />
                </div>
                <section className="lg:px-20 md:px-10 px-5 py-10 overflow-y-scroll">
                    <div className="flex items-center justify-start mb-6 ">
                        <h2 className="text-2xl font-bold text-red ml-0">{topSection.title}</h2>
                    </div>
                    <BlockContent blocks={topSection.paragraph1} />
                    <div className="flex flex-row flex-wrap mx-auto w-full my-10">
                        {topSection.steps.map(step => <Step key={step.title} title={step.title} desc={step.description} icon={icon(step.icon.image)} image={step.icon.image} />)}
                    </div>
                    <BlockContent blocks={topSection.paragraph2} />
                </section>
            </motion.section>
        </div>
    )
}


export default SingleService


export const getStaticPaths = async (ctx) => {
    let currentLanguage = ctx.defaultLocale
    let slugs = await getData(`*[_type == 'service' && pageInfo.lang->language == '${currentLanguage}' ]{slug}`)
    let paths = slugs.map(slug => {
        return {
            params: { service: slug.slug }
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    let query = ctx.params.service
    let currentLanguage = ctx.locale
    let props = null
    try {
        props = await getData(`*[ slug == '${query}' && pageInfo.lang->language == '${currentLanguage}' ][0]`)
    } catch (err) { console.log(err) }
    return { props }
}

