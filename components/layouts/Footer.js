import FooterLink from '../FooterLink'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const Footer = () => {
    const [open, setOpen] = useState(false)
    const [hide, setHide] = useState(true)


    const onOpening = () => {
        setOpen(true)
    }

    if (open) {
        return (
            <>
                <motion.div className="footer fixed bottom-0 z-50 w-screen bg-red rounded-t-lg lg:px-24 md:px-5 px-2"
                    initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} onMouseLeave={() => setOpen(false)}>
                    <div className="flex lg:flex-row md:flex-row flex-col justify-center w-full pt-10 pb-5 p-2">
                        <div className="w-full h-full">
                            {/* logo */}
                            <div className="flex justify-start items-center">
                                <img src="/assets/svg/footer_logo.svg" className="lg:mb-0 md:mb-0 mb-5" alt="logo" width="45px" />
                                <p className=" ml-2" style={{ fontFamily: "Cutive Mono", fontSize: 18, }}>Glaxier</p>
                            </div>
                            {/* location  */}
                            <div className="my-6 mx-4" >
                                <FooterLink src="/assets/img/footer/location.svg" alt="location" href="https://goo.gl/maps/CsG48GVUC6eXEDk37" width={true} content="6 Motorway road, Prawet Bangkok 10250" />
                                {/* phone  */}
                                <FooterLink src="/assets/img/footer/phone.svg" href="tel:+61424555959" alt="phone" content="+61 424 555 959" />
                                {/* email  */}
                                <FooterLink src="/assets/img/footer/mail.svg" href="mailto:tan@glaxier.com.au" alt="mail" content="tan@glaxier.com.au" />
                            </div>
                        </div>
                        <div className="flex items-start justify-start  w-full h-full lg:py-6 md:py-6 py-9">
                            {/* quick links */}
                            <div className="flex flex-col w-1/3">
                                <h4 className="text-base text-white">Quick links</h4>
                                <br />
                                <Link href="/">Home</Link>
                                <Link href="/about">About us</Link>
                                {/* <Link href="/blog">Blog</Link> */}
                                <Link href="/contact">Contact us</Link>
                            </div>
                            {/* services  */}
                            <div className="flex flex-col w-1/2">
                                <h4 className="text-base text-white">Services</h4>
                                <br />
                                <Link href="/services/digital-advertising">Digital Advertising</Link>
                                <Link href="/services/seo">SEO</Link>
                                <Link href="/services/website-development">Website Development</Link>
                                <Link href="/services/influencer-marketing">Influencer Marketing</Link>
                                <Link href="/services/content-writing">Content Writing</Link>
                                <Link href="/services/graphic-design">Graphic Design</Link>
                            </div>
                        </div>
                        <div className="w-full h-full pt-5">
                            {/* follow us  */}
                            <h4 className="text-base text-white">Follow us</h4>
                            <p>Join our community to keep up to date with the latest digital strategy that will help you grow you business.</p>
                            {/* input  */}
                            <div className="flex items-center justify-between w-full bg-white rounded-full p-6 h-12 mt-5">
                                <input type="text" placeholder="Enter your email" className="w-11/12" onClick={() => setOpen(true)} />
                                <img className="cursor-pointer" src="/assets/img/footer/arrow.svg" alt="right arrow" />
                            </div>
                            {/* brand icons  */}
                            <div className="flex w-full lg:justify-end md:justify-end justify-center my-5">
                                <a href="https://www.facebook.com/GlaxierAgency" target="_blank"><img src="/assets/img/footer/facebook.svg" className="px-5" alt="facebook" /></a>
                                <a href="https://au.linkedin.com/company/glaxier" target="_blank"><img src="/assets/img/footer/linkedin.svg" className="px-5" alt="linkedin" /></a>
                                <a href="https://www.instagram.com/glaxier_official/" target="_blank"><img src="/assets/img/footer/instagram.svg" className="pl-4" alt="instagram" /></a>
                            </div>

                        </div>
                    </div>
                    {/* footer meta  */}
                    <div className="flex items-center justify-between py-4 border-t">
                        <p>Privacy Policy | Terms of Use</p>
                        <p>Copyright © All rights reserved | Glaxier</p>
                    </div>
                </motion.div>
            </>
        )
    } else {
        return <div className='sm:hidden fixed left-1/2 transform -translate-x-2/4 bottom-0 z-50 w-40 h-10 bg-transparent text-purple hover:bg-red hover:text-white transition-all cursor-pointer grid place-items-center rounded-t-full'
            onClick={() => onOpening()}
            onMouseEnter={() => setHide(false)}
            onMouseLeave={() => setHide(true)}>
            <img src="/assets/svg/upArrow.svg" width={20} height={20} />
            {!hide && <p style={{ fontSize: '0.5rem' }}>Open Footer</p>}
        </div>
    }
}

export default Footer
