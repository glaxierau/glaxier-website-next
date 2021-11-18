import React, { useReducer, useState } from 'react'
import SideBar from './SideBar'
import Link from 'next/link'

const MobileNav = () => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!isOpen)
    }
    return (
        <div>
            <nav className="fixed z-50 lg:hidden top-0 h-14 bg-white w-full flex items-center justify-between px-4">
                <Link href="/"><img src="/assets/img/header/logo.png" width="100" alt="logo" className="cursor-pointer" /></Link>
                <div className="flex items-center justify-center pt-2 pl-2">
                    <button className={`outline-none hamburger hamburger--slider-r ${isOpen && 'is-active'}`} type="button" onClick={() => toggleNav()} >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <SideBar open={isOpen} setNav={setNav} />
            </nav>
        </div>
    )
}

export default MobileNav
