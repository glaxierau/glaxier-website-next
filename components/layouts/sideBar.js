import React, { useState } from 'react'
import LanguageSection from '../common/LanguageSection'
import SearchBox from '../common/SearchBox'
import NavList from '../common/NavList'

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
            <div className={`${!open ? "hidden" : "grid"} h-screen w-screen absolute top-14 left-0 z-40 bg-white`}>
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
            </div>
        </>
    )
}

export default SideBar
