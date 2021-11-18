import React, { useState } from 'react'
import LanguageSection from '../common/LanguageSection'
import SearchBox from '../common/SearchBox'
import NavList from '../common/NavList'
import { AnimatePresence, motion } from 'framer-motion'

const SideBar = ({ open, setNav }) => {
    const navs = [
        { type: "home", href: '/', name: 'Home', active: true },
        { type: "about", href: '/about', name: 'About Us', active: false },
        { type: "services", href: '/services', name: 'Services', active: false },
        { type: "blog", href: '/blog', name: 'Blog', active: false },
        { type: "contact", href: '/contact', name: 'Contact Us', active: false }
    ]


    return (
        <>
            <motion.div className="relative overflow-y-hidden bg-white"
                initial={{ opacity: 0 }}
                animate={{ y: open ? 0 : -2, opacity: open ? 1 : 0, height: open ? '100vh' : '0vh' }}
                transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}>
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
            </motion.div>
        </>
    )
}

export default SideBar
