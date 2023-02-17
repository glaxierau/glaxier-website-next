import React from 'react'
import AppButton from '../AppButton'
import CheckIcon from '../icons/CheckIcon'
import Title from '../Title'
import style from '../../styles/About.module.css'
import SlideIn from '../animation/SlideIn'
import BlockContent from '../BlockContent/BlockContent'
import Img from 'next/image'
import { urlFor } from '../../hooks/tools'
import SlideInRight from '../animation/SlideInRight'
import FadeIn from '../animation/FadeIn'

const About = (props) => {
    const { withButton = false, media } = props
    return (
        <>
            <div className="bg-white-dark xl:h-screen lg:h-[max-content] h-auto lg:flex 
            lg:flex-row flex-col lg:px-14 px-5 lg:pt-40 pt-10 lg:py-20">
                <SlideIn className="lg:w-1/2 md:w-full w-full h-auto flex items-center justify-center"
                    delay={0.2}>
                    {media.mediaType === 'image' ?
                        <Img
                            src={urlFor(media?.image?.image).url()}
                            priority
                            width={550}
                            height={550}
                            alt={media?.image?.image?.alt || 'image'}
                            title={media?.image?.image?.title || 'image'}
                        />
                        :
                        <iframe
                            src={media?.videoObj?.link}
                            title={media?.videoObj?.title || 'image'}
                            width={550}
                            height={550}
                        >
                        </iframe>
                    }
                </SlideIn>
                <SlideIn
                    delay={0.6}
                    className="lg:w-1/2 w-full lg:mx-20 md:mx-10 mx-0 lg:mt-0 mt-20 flex flex-col items-center justify-center lg:py-20 py-5"
                >
                    <FadeIn delay={0.3}>
                        <Title
                            title={props.sectionTitle}
                            lineColor="#CFD7F1"
                            lineWidth="210"
                        />{' '}
                    </FadeIn>
                    <br /> <br />

                    <FadeIn delay={0.6}>
                        <div
                            className={` ${style.list_container} relative flex justify-between`}
                        >
                            <div className={`${style.line} bg-red-dark`} />
                            {props.checks.map((label) => (
                                <CheckIcon key={label} label={label} />
                            ))}
                        </div>{' '}
                    </FadeIn>
                    <br /> <br />
                    <FadeIn delay={0.8}>
                        <div className="mt-20 w-full xl:px-0 lg:px-5 md:px-36 px-0">
                            <BlockContent blocks={props.aboutDescription} />
                        </div>{' '}
                    </FadeIn>
                    <br />
                    <SlideInRight>
                        {withButton && (
                            <AppButton
                                title={props.ctaButton.buttonText}
                                width={200}
                                height={40}
                                bgColor="bg-blue"
                                bgColorHover="hover:bg-red"
                                txtColor="text-white"
                                link={props.ctaButton.link}
                            />
                        )}
                    </SlideInRight>
                </SlideIn>
            </div>
        </>
    )
}

export default About
