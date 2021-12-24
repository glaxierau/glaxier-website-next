import React from 'react'
import AppButton from '../AppButton'
import CheckIcon from '../icons/CheckIcon'
import Title from '../Title'
import style from '../../styles/About.module.css'
import SlideIn from '../animation/SlideIn'
import BlockContent from '../BlockContent/BlockContent'
import Img from 'next/image'

const About = (props) => {
    const { withButton = false } = props
    return (
        <>
            <div className="xl:h-screen lg:h-cscreen h-auto lg:flex lg:flex-row flex-col lg:px-14 px-5 lg:pt-0 pt-10 my-20">
                <SlideIn className="lg:w-1/2 md:w-full w-full h-auto flex items-center justify-center">
                    <Img src="/assets/img/home/aboutimg.png" priority width={550} height={550} alt="image" />
                </SlideIn>
                <SlideIn delay={0.3} className="lg:w-1/2 w-full lg:mx-20 md:mx-10 mx-0 lg:mt-0 mt-20 flex flex-col items-center justify-center lg:py-20 py-5">
                    <Title title={props.sectionTitle} lineColor="#CFD7F1" lineWidth="210" /> <br /> <br />
                    <div className={` ${style.list_container} relative flex justify-between`}>
                        <div className={`${style.line} bg-red-dark`} />
                        {props.checks.map((label) => <CheckIcon key={label} label={label} />)}
                    </div> <br /> <br />
                    <div className="mt-20 w-full xl:px-0 lg:px-5 md:px-36 px-0">
                        <BlockContent blocks={props.aboutDescription} />
                    </div> <br />
                    {withButton && <AppButton title={props.ctaButton.buttonText} width={200} height={40} bgColor="bg-blue" bgColorHover="hover:bg-red" txtColor="text-white" link={props.ctaButton.link} />}
                </SlideIn>
            </div>
        </>
    )
}

export default About
