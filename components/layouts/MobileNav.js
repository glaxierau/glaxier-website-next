import React, { useState } from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'

const MobileNav = ({ nav, header }) => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!isOpen)
    }
    return (
        <div>
            <nav className="fixed z-50 lg:hidden top-0 h-14 bg-white w-full flex items-center justify-between px-4">
                <Link href="/" passHref>
                    {/* logo here... */}
                    <div className=" w-28 h-20  flex items-center justify-center cursor-pointer">
                        <Image src={"/assets/svg/logo.svg"} alt="logo" width="40" height="40" />
                        <p className="text-gray-600 text-base ml-1" style={{ fontFamily: "Cutive Mono" }}>Glaxier</p>
                    </div>
                </Link>
                <div className="flex items-center justify-center pt-2 pl-2">
                    <button className={`outline-none hamburger hamburger--slider-r ${isOpen && 'is-active'}`} type="button" onClick={() => toggleNav()} >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <SideBar nav={nav} header={header} open={isOpen} setNav={setNav} />
            </nav>
        </div>
    )
}

export default MobileNav
