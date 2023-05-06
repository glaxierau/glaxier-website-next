import React from 'react'
import AppButton from '../AppButton'
import CheckIcon from '../icons/CheckIcon'
import Title from '../Title'
import style from '../../styles/About.module.css'
import SlideIn from '../animation/SlideIn'
import BlockContent from '../BlockContent/BlockContent'
import Img from 'next/image'
import { urlFor } from '../../hooks/tools'

const About = (props) => {
    const { withButton = false, media } = props
    return (
        <>
            <div className="xl:h-screen lg:h-cscreen h-auto lg:flex lg:flex-row flex-col lg:px-14 px-5 lg:pt-0 pt-10 my-20">
                <SlideIn className="lg:w-1/2 md:w-full w-full h-auto flex items-center justify-center">
                    {media.mediaType === 'image' ? (
                        <Img
                            src={urlFor(media?.image?.image).url()}
                            priority
                            width={550}
                            height={550}
                            alt={media?.image?.image?.alt || 'image'}
                            title={media?.image?.image?.title || 'image'}
                        />
                    ) : (
                        <iframe
                            src={media?.videoObj?.link}
                            title={media?.videoObj?.title || 'image'}
                            width={550}
                            height={550}
                        ></iframe>
                    )}
                </SlideIn>
                <SlideIn
                    delay={0.2}
                    className="lg:w-1/2 w-full xl:mx-20 mx-0 lg:mt-0 mt-20 flex flex-col items-center justify-center lg:py-20 py-5"
                >
                    <Title
                        title={props.sectionTitle}
                        lineColor="#CFD7F1"
                        lineWidth="210"
                    />{' '}
                    <br /> <br />
                    <div
                        className={`my-10 w-[22rem] sm:w-[30rem] lg:w-[28rem] h-16 relative flex justify-between`}
                    >
                        {/* red line  */}
                        <div
                            className={`${style.line} absolute top-[1.0rem] left-[50%] translate-x-[-50%] h-[2px] w-[17rem] sm:w-[23rem] z-[-1] bg-red-dark lg:top-[1rem] lg:w-[23rem] lg:top-[1.5rem]`}
                        />
                        {props.checks.map((label) => (
                            <CheckIcon key={label} label={label} />
                        ))}
                    </div>{' '}
                    <br /> <br />
                    <div className="mt-10 w-full xl:px-0 lg:px-5 md:px-36 px-0">
                        <BlockContent blocks={props.aboutDescription} />
                    </div>{' '}
                    <br />
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
                </SlideIn>
            </div>
        </>
    )
}

export default About
