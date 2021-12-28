import React from 'react'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import BlockContent from '../../components/BlockContent/BlockContent'
import Img from 'next/image'
import { sanityImage } from '../../hooks/tools'
import { motion } from 'framer-motion'
import Cumstom404 from '../404'

const SingleService = (props) => {
    const { topSection, pageInfo, notFound } = props
    if (notFound) {
        return <Cumstom404 />
    }
    else {
        let image = sanityImage(topSection.serviceImage.image)
        delete image.blurDataURL
        delete image.loader
        return (
            <div className="flex lg:flex-row flex-col ">
                <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.mataDescription} />
                <div className="w-full relative">
                    {/* <Img {...image} layout='fill' className="lg:h-screen w-full h-96 object-cover" alt="meeting" /> */}
                    <motion.img initial={{ x: -5 }} animate={{ x: 0 }} transition={{ duration: 0.3 }} {...image} className="lg:h-screen w-full h-96 object-cover" style={{ objectPosition: ' 40% 0px' }} alt="meeting" />
                    <img src="/assets/svg/shape.svg" alt="Shape for services" className="lg:hidden grid absolute bottom-0 w-screen " />
                </div>
                <motion.section initial={{ x: 30 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className="w-full lg:h-screen h-auto bg-white-dark relative flex lg:justify-center justify-start items-center flex-col">
                    <img src="/assets/svg/services.svg" alt="Shape for services" className="hidden lg:flex absolute h-screen -left-28" />
                    <section className="lg:px-20 md:px-10 px-5 py-10 overflow-y-scroll">
                        <div className="flex items-center justify-start mb-6 ">
                            {/* <div className="bg-red h-10 w-20" /> */}
                            <h2 className="text-2xl font-bold text-red ml-0">{topSection.title}</h2>
                        </div>
                        <BlockContent blocks={topSection.paragraph1} />
                        <div className="flex flex-row flex-wrap mx-auto w-full my-10">
                            {topSection.steps.map(step => <Step key={step.title} title={step.title} desc={step.description} icon={sanityImage(step.icon.image)} image={step.icon.image} />)}
                        </div>
                        <BlockContent blocks={topSection.paragraph2} />
                    </section>
                </motion.section>
            </div>
        )
    }
}

const Step = ({ title, desc, icon, image }) => {
    return (
        <section className="flex items-start justify-center m-2 w-full ">
            <div className="bg-purple rounded-full overflow-hidden flex justify-center items-center p-3">
                <Img {...icon} width={25} height={25} placeholder="empty" className='invert' />
            </div>
            <div className=" w-full ml-4 flex flex-col items-left justify-start ">
                <p className="text-purple">{title}</p>
                <p className="font-thin text-sm text-black-light pt-1 pb-2">{desc}</p>
            </div>
        </section>
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

