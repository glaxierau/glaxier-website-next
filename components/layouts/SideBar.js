import React, { useState } from 'react'
import LanguageSection from '../common/LanguageSection'
import SearchBox from '../common/SearchBox'
import NavList from '../common/NavList'
import { motion } from 'framer-motion'

const SideBar = ({ open, setNav }) => {
    const navs = [
        { type: "home", href: '/', name: 'Home', active: true },
        { type: "about", href: '/about', name: 'About Us', active: false },
        { type: "services", href: '/services', name: 'Services', active: false },
        { type: "blog", href: '/blog', name: 'Blog', active: false },
        { type: "contact", href: '/contact', name: 'Contact Us', active: false }
    ]


    return (
        <>  {
            open &&
            <motion.div className={` w-screen absolute top-14 left-0 z-0 bg-white`}
                initial={{ y: -10, opacity: 0, height: '10vh' }}
                animate={{ y: 0, opacity: 1, height: '100vh' }}
                exit={{ y: -100, opacity: 0, height: '10vh' }}
                transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}
            >
                <div className="relative">
                    <img src="/assets/svg/shape.svg" />
                    <div className="h-screen w-screen bg-white-dark py-2 px-5">
                        <div>
                            <LanguageSection />
                            <br />
                            <br />
                            <NavList navs={navs} setNav={setNav} />
                            <div style={{ height: '1px' }} className="my-10 mx-auto w-full bg-purple" />
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </motion.div>
        }

        </>
    )
}

export default SideBar
