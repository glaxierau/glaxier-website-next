import React from 'react'
import AppButton from '../appButton'
import CheckIcon from '../icons/CheckIcon'
import Title from '../title'
import style from '../../styles/About.module.css'

const About = () => {
    return (
        <>
            <div className="lg:flex lg:flex-row flex-col lg:px-20 px-5 lg:pt-4 pt-10" id="about">
                <div className="lg:w-1/2 w-full  flex items-center justify-center">
                    <img src="/assets/img/home/aboutimg.png" width="500" alt="image" />
                </div>
                <div className="lg:w-1/2 w-full lg:mt-0 mt-20 flex flex-col items-center justify-center lg:py-20 py-5">
                    <Title title="Who is Glaxier?" lineColor="#CFD7F1" lineWidth="210" /> <br /> <br />
                    <div className={` ${style.list_container} relative flex justify-between`}>
                        <div className={`${style.line} bg-red-dark`} />
                        <CheckIcon label="Passionate" />
                        <CheckIcon label="Innovative" />
                        <CheckIcon label="Futuristic" />
                        <CheckIcon label="Hard-working" />
                    </div> <br /> <br />
                    <div className="mt-20 lg:w-4/5 w-full">
                        <p className="text-black-light font-thin">
                            We are a team of young and passionate Digital Specialists. Our team has experience working in the big corporate world where we seasoned our skills. We are ready to tackle the world and help more businesses succeed digitally. We have a team of experienced digital advertisers, digital strategists, copywriters, graphic designers and developers who are excited to learn about your brand and help you grow.
                            <br /> <br />
                            Our Brand, Glaxier came from the word glacier. It’s a metaphor for an iceberg which may seem small above the water but is much biggest under water. Digital marketing effort may not be apparent but it is a crucial part of the succeess of many bussinesses no matter the size. In a way, our team act as the under-water part of a glacier for you business, laying groud work for the sucess everyone appreciate.
                        </p>
                    </div> <br />
                    <AppButton title="VIEW MORE" width={200} bgColor="bg-blue" bgColorHover="hover:bg-red" txtColor="text-white" link="/about" />
                </div>
            </div>
            <style jsx>
                {`
                    p {
                        font-size: 0.75rem;
                    }
                `}
            </style>
        </>
    )
}

export default About
