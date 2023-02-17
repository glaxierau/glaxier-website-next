import React, { useEffect } from 'react'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import BlockContent from '../../components/BlockContent/BlockContent'
import Img from 'next/image'
import { useSanityImage } from '../../hooks/tools'
import { motion } from 'framer-motion'
import { Step } from '../../components/service/Steps'
import PageNotFound from '../404'
import SlideInRight from '../../components/animation/SlideInRight'
import SlideIn from '../../components/animation/SlideIn'

function SingleService(props) {
    const { topSection, pageInfo, notFound } = props
    let image = useSanityImage
    if (notFound) {
        return <PageNotFound />
    }
    return (
        <div className="flex lg:flex-row flex-col bg-white ">
            <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.mataDescription} />
            <SlideIn className="w-full relative">
                <div className="lg:h-cscreen w-full h-60 object-cover">
                    <Img {...image(topSection?.serviceImage?.image)} layout='fill' objectFit='cover' alt="meeting" />
                </div>
                <div className='lg:hidden grid absolute -bottom-1 w-screen'>
                    <Img src="/assets/svg/shape.svg" alt="Shape for services" layout='responsive' width={100} height={16} />
                </div>
            </SlideIn>
            <SlideInRight className="w-full lg:h-cscreen h-auto bg-white-dark relative flex lg:justify-center justify-start items-center flex-col"
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hidden lg:flex absolute h-cscreen w-[10rem] -left-[9rem] z-10">
                    <Img src="/assets/svg/services.svg" alt="Shape for services" layout='fill' objectFit='cover' />
                </div>
                <section className="lg:px-20 md:px-10 px-5 py-10 overflow-y-scroll">
                    <SlideIn className="flex items-center justify-start mb-6 "
                        delay={0.5}>
                        <h2 className="text-2xl font-bold text-red ml-0">{topSection.title}</h2>
                    </SlideIn>
                    <SlideIn delay={0.6}>
                        <BlockContent blocks={topSection.paragraph1} />
                    </SlideIn>
                    <div className="flex flex-col  mx-auto w-full my-10">
                        {topSection.steps.map((step, index) =>
                            <SlideIn key={step.title} delay={index / 5}>
                                <Step key={step.title} title={step.title} desc={step.description} icon={image(step.icon.image)} image={step.icon.image} />
                            </SlideIn>
                        )}
                    </div>
                    <SlideIn delay={0.6}>
                        <BlockContent blocks={topSection.paragraph2} />
                    </SlideIn>
                </section>
            </SlideInRight>
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
    } catch (err) { throw err }
    return { props }
}

