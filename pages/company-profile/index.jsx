import Head from '../../components/common/Head'
import { useState, useEffect } from 'react'

const Iframe = (props) => {
    return (
        <iframe
            src="https://onedrive.live.com/embed?cid=721D1C9FC2EE026B&resid=721D1C9FC2EE026B%21122&authkey=ALaBD_6JfN0Cv70&em=2"
            width={props.windowWidth * 0.8}
            height={props.windowHeight * 0.8}
            frameBorder="0"
            scrolling="no"
        ></iframe>
    )
}
const Index = () => {
    if (!process.browser) return <div></div>
    const windowWidth = (window && Reflect.get(window, 'innerWidth')) || ''
    const windowHeight = (window && Reflect.get(window, 'innerHeight')) || ''
    return (
        <div>
            <Head
                title="Glaxier's Company Profile, Case Studies and Experience"
                description="Find out more about Glaxier. We are here to deliver value by generating more revenue for your business. 100% satisfaction guarantee. Contact us today!"
            />
            <div className="relative flex flex-col justify-center items-center">
                <h1 className="lg:text-3xl md:text-2xl text-2xl font-extrabold text-center z-10">
                    Glaxier's Company Profile
                </h1>
            </div>
            <div className="flex align-middle justify-center">
                <Iframe windowWidth={windowWidth} windowHeight={windowHeight} />
            </div>
        </div>
    )
}

export default Index
