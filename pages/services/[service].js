import React from 'react'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import BlockContent from '../../components/BlockContent/BlockContent'
import Img from 'next/image'
import style from '../../styles/Services.module.css'
import service from '../../config/doc.json'
import { capitalizeFirstLetter, sanityImage } from '../../hooks/tools'

const index = ({ service }) => {
    const { topSection, pageInfo, notFound } = service
    if (notFound) {
        return (<p className="my-12">Page does not exist....</p>)
    } else {
        let image = sanityImage(topSection.serviceImage.image)
        return (
            <div className="flex lg:flex-row flex-col ">
                <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.metaTitle} />
                <div className="w-full relative">
                    {/* <Img {...image} layout='fill' className="lg:h-screen w-full h-96 object-cover" alt="meeting" /> */}
                    <img {...image} className="lg:h-screen w-full h-96 object-cover" style={{ objectPosition: '100% 0px' }} alt="meeting" />
                    <img src="/assets/svg/shape.svg" alt="Shape for services" className="lg:hidden grid absolute bottom-0 w-screen " />
                </div>
                <section className="w-full lg:h-screen h-auto bg-white-dark relative flex lg:justify-center justify-start items-center flex-col">
                    <img src="/assets/svg/services.svg" alt="Shape for services" className="hidden lg:grid absolute -left-32 h-screen" />
                    <section className="lg:px-20 md:px-10 px-5 py-10 overflow-y-scroll">
                        <div className="flex items-center justify-start mb-6 ">
                            <div className="bg-red h-10 w-20" />
                            <h2 className="text-2xl text-red ml-5">{topSection.title}</h2>
                        </div>
                        <BlockContent blocks={topSection.paragraph1} />
                        <div className="flex flex-row flex-wrap mx-auto w-full my-10">
                            {topSection.steps.map(step => <Step key={step.title} title={step.title} desc={step.description} />)}
                        </div>
                        <BlockContent blocks={topSection.paragraph2} />
                    </section>
                </section>
            </div>
        )
    }
}

const Step = ({ title, desc }) => {
    return (
        <section className="flex items-center justify-center m-2 w-full ">
            <span className="bg-purple rounded-full" style={{ width: 30, height: 30 }} />
            <div className=" w-full ml-2 flex flex-col items-left justify-start ">
                <p className="text-purple">{title}</p>
                <p className="font-thin text-sm text-black-light">{desc}</p>
            </div>
        </section>
    )
}
export default index


export const getServerSideProps = async (ctx) => {
    let query = ctx.params.service
    let currentLanguage = ctx.locale
    // query = query.split("-").map(t => capitalizeFirstLetter(t)).join(" ")

    const langQuery = `*[ _type == 'languageOption']`
    let lang = await getData(langQuery)
    lang = lang.filter(lang => lang.language === currentLanguage)[0]

    const serviceQuery = `*[ slug.current == '${query}' && pageInfo.lang._ref == '${lang._id}' ][0]`
    const service = await getData(serviceQuery)
    return {
        props: {
            service
        }
    }
}