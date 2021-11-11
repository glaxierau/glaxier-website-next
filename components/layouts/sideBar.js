import React, { useReducer, useState } from 'react'
import Link from 'next/link'
import LanguageSection from '../common/LanguageSection'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { setToTrue } from '../../hooks/setToTrue'
import SearchBox from '../common/SearchBox'

const SideBar = ({ open, setNav }) => {
    const [navs, updateNav] = useState([
        { type: "home", href: '/', name: 'Home', active: true },
        { type: "about", href: '/about', name: 'About Us', active: false },
        { type: "services", href: '/services', name: 'Services', active: false },
        { type: "blog", href: '/blog', name: 'Blog', active: false },
        { type: "contact", href: '/contact', name: 'Contact Us', active: false }
    ])


    const onToggleNav = (nav) => {
        setAllToFalse(navs, updateNav)
        setToTrue(nav, navs, updateNav)
        setNav(false)
    }

    const NavList = () => {
        return (
            <>
                {navs.map(nav => (
                    <Link key={nav.type} href={nav.href}>
                        <p className={`text-${nav.active ? 'red' : 'purple'}  hover:text-red cursor-pointer font-extrabold text-3xl my-5`} onClick={() => onToggleNav(nav)}>{nav.name}</p>
                    </Link>
                ))}
            </>
        )
    }

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
                            <NavList />
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
