import React from 'react'
import SectionHead from '../../components/common/Head'

const index = () => {
    return (
        <div className="flex lg:flex-row flex-col ">
            <SectionHead title="Services | Glaxier" description="desc desc" />
            <div className="w-full relative">
                <img src="/assets/img/images/services_meeting.jpg" className="lg:h-screen w-full h-96 object-cover" style={{ objectPosition: '100% 0px' }} alt="meeting" />
                <img src="/assets/svg/shape.svg" alt="Shape for services" className="lg:hidden grid absolute bottom-0 w-screen " />
            </div>
            <section className="w-full lg:h-screen h-auto bg-white-dark relative flex lg:justify-center justify-start items-center flex-col">
                <img src="/assets/svg/services.svg" alt="Shape for services" className="hidden lg:grid absolute -left-32 h-screen" />
                <section className="lg:px-20 md:px-10 px-5">
                    <div className="flex items-center justify-start ">
                        <div className="bg-red h-10 w-20" />
                        <h2 className="text-2xl text-red ml-5">Digital Advertising</h2>
                    </div>
                    <p className="font-thin text-black-light py-10">A complete solution for digital-ready businesses. Generate sales/leads/engagement across Google, Facebook, Instagram, TikTok and More.</p>
                    <div className="flex justify-around items-center lg:flex-row md:flex-row flex-col flex-wrap mx-auto lg:w-10/12 md:w-3/5 w-full ">
                        <Step />
                        <Step />
                        <Step />
                        <Step />
                    </div>
                    <p className="font-thin text-black-light py-10">orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </section>
            </section>
        </div>
    )
}

const Step = () => {
    return (
        <section className="flex items-center justify-center my-4 ">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="lg:w-28 md:w-28 w-full ml-2 flex flex-col items-left justify-center ">
                <p className="text-purple">Step 1</p>
                <p className="font-thin text-black-light">Lorem ipsum dolor sit amet</p>
            </div>
        </section>
    )
}
export default index
