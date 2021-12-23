import React from 'react'
import { useSelector } from 'react-redux'
import AppButton from '../AppButton'
import CheckIcon from '../icons/CheckIcon'
import Title from '../Title'
import style from '../../styles/About.module.css'
import SlideIn from '../animation/SlideIn'
import BlockContent from '../BlockContent/BlockContent'

const About = (props) => {
    const { withButton = false } = props
    return (
        <>
            <div className="lg:flex lg:flex-row flex-col lg:px-20 px-5 lg:pt-4 pt-20">
                <SlideIn className="lg:w-1/2 w-full h-auto flex items-center justify-center">
                    <img src="/assets/img/home/aboutimg.png" width="500" alt="image" />
                </SlideIn>
                <SlideIn delay={0.3} className="lg:w-1/2 w-full lg:mt-0 mt-20 flex flex-col items-center justify-center lg:py-20 py-5">
                    <Title title={props.sectionTitle} lineColor="#CFD7F1" lineWidth="210" /> <br /> <br />
                    <div className={` ${style.list_container} relative flex justify-between`}>
                        <div className={`${style.line} bg-red-dark`} />
                        {props.checks.map((label) => <CheckIcon key={label} label={label} />)}
                    </div> <br /> <br />
                    <div className="mt-20 lg:w-4/5 w-full xl:px-0 lg:px-0 md:px-36 px-2">
                        <BlockContent blocks={props.aboutDescription} />
                        {/* <p className="text-black-light">{aboutSection.aboutDescription[0].children[0].text}</p> */}
                    </div> <br />
                    {withButton && <AppButton title={props.ctaButton.buttonText} width={200} bgColor="bg-blue" bgColorHover="hover:bg-red" txtColor="text-white" link={props.ctaButton.link} />}
                </SlideIn>
            </div>
        </>
    )
}

export default About
