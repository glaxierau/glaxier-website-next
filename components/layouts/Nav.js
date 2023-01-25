import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { IoIosArrowDown } from 'react-icons/io'
import '../../styles/navigation.module.css'
import DropDown from './DropDown'
import { motion } from 'framer-motion'
// import nav from '../../config/navList'
import NavSVGIcon from '../icons/NavSVGIcon'
import SearchBox from '../common/SearchBox'
import { useSelector } from 'react-redux'
import Flags from '../common/Flags'


const NavList = ({ to, label, uuid, dropDownList }) => {
    const [openDD, setDD] = useState(false)
    return (
        <div className="flex items-center justify-center h-full">
            <div className="dropdown dropdown-hover">
                <Link passHref href={`/${to}`} className="relative flex items-center justify-center h-full cursor-pointer">
                    <a className='flex items-center justify-center text-base text-purple hover:text-red cursor-pointer'
                        tabIndex={0}
                        onMouseEnter={() => setDD(true)}
                        onMouseLeave={() => setDD(false)}
                    >
                        <label className="m-1 cursor-pointer">{label}</label>
                        {dropDownList && <IoIosArrowDown className={`${openDD ? 'rotate-180' : 'rotate-0'} transition-all ml-2`} />}
                    </a>
                </Link>
                {dropDownList &&
                    <div tabIndex={0} className="dropdown-content menu pt-4 w-52"
                        onMouseEnter={() => setDD(true)}
                        onMouseLeave={() => setDD(false)}>
                        <ul className="bg-white shadow-sm">
                            {
                                dropDownList?.map((e, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={`/${to}/${e.slug}`}>
                                                <a className='active:bg-purple m-0 py-4 hover:bg-purple text-purple text-base hover:text-white'>{e.label}</a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}


const Nav = () => {
    const [openSearch, setSearch] = useState(false)
    const { state } = useSelector(s => s.state)
    const headerState = state?.find(el => el?.name === 'header')
    const header = headerState?.state
    return (
        <>
            <motion.nav
                className="fixed hidden lg:flex z-40 top-0 bg-white w-full h-20 px-28 justify-between"
            >
                <motion.div className={`absolute -z-10 top-20 left-1/2 transform -translate-x-1/2 bg-white px-5 flex items-center justify-center ${openSearch && 'shadow-drop'}`}
                    style={{ width: '60vw', borderRadius: '0 0 30px 30px' }}
                    animate={openSearch ? { display: 'flex', height: '10vh', y: -1, x: '-50%' } : { display: 'flex', height: '0vh', x: '-50%', y: -10 }}
                >
                    {openSearch && <SearchBox
                        shadow={false}
                        border onClose={() => setSearch(false)}
                        autoFocus={openSearch} />}
                </motion.div>

                {/* logo section */}
                <Link href="/" passHref>
                    <div className="w-40 h-20 flex items-center justify-start cursor-pointer">
                        {/* logo here... */}
                        <Image
                            src={"/assets/svg/logo.svg"}
                            alt="logo" width="40" height="40"
                        />
                        <p className="text-gray-600 text-base ml-2"
                            style={{ fontFamily: "Cutive Mono" }}>Glaxier</p>
                    </div>
                </Link>
                {/* navigation */}
                <div className="navlist flex w-3/5 justify-around items-center">
                    {header?.menuList?.map((list, index) =>
                        <NavList
                            key={index}
                            to={list?.slug?.current}
                            label={list?.menuLabel}
                            dropDownList={list?.withSubMenu ? list.subMenuList : false}
                        />
                    )}
                    <span className="seperator border-l-2 h-5" />
                    <div className="flex w-20 justify-around items-center">

                        <div className="dropdown dropdown-hover bg-white">
                            <label tabIndex={0}>
                                <NavSVGIcon type='language'>
                                    <path d="M18,3.375h-.049a14.625,14.625,0,0,0,.007,29.25h.049A14.625,14.625,0,1,0,18,3.375ZM30.67,17.016H25.214a27.689,27.689,0,0,0-.689-5.358,21.42,21.42,0,0,0,3.495-1.477A12.6,12.6,0,0,1,30.67,17.016Zm-13.655,0H12.67a24.992,24.992,0,0,1,.619-4.859,21.392,21.392,0,0,0,3.727.5Zm0,1.969v4.352a21.482,21.482,0,0,0-3.727.5,24.989,24.989,0,0,1-.619-4.852Zm1.969,0h4.31a24.845,24.845,0,0,1-.619,4.845,20.988,20.988,0,0,0-3.691-.492Zm0-1.969V12.656a21.483,21.483,0,0,0,3.691-.492,24.919,24.919,0,0,1,.619,4.852Zm7.692-8.29A19.533,19.533,0,0,1,24,9.816a14.518,14.518,0,0,0-1.863-3.832A12.724,12.724,0,0,1,26.677,8.726Zm-4.528,1.6a19.788,19.788,0,0,1-3.164.422V5.583C20.18,6.23,21.347,7.966,22.148,10.322ZM17.016,5.555v5.182a19.447,19.447,0,0,1-3.2-.429C14.632,7.931,15.813,6.195,17.016,5.555ZM13.809,6a14.632,14.632,0,0,0-1.849,3.8A19.973,19.973,0,0,1,9.323,8.726,12.533,12.533,0,0,1,13.809,6ZM7.98,10.188a21,21,0,0,0,3.459,1.462,26.573,26.573,0,0,0-.689,5.358H5.337A12.532,12.532,0,0,1,7.98,10.188Zm-2.651,8.8h5.414a27.618,27.618,0,0,0,.689,5.358A22.277,22.277,0,0,0,7.973,25.8,12.6,12.6,0,0,1,5.33,18.984Zm3.987,8.29a19.678,19.678,0,0,1,2.644-1.083A14.684,14.684,0,0,0,13.809,30,12.845,12.845,0,0,1,9.316,27.274Zm4.5-1.589a19.549,19.549,0,0,1,3.2-.429v5.189C15.806,29.805,14.632,28.062,13.816,25.685Zm5.168,4.732V25.249a19.788,19.788,0,0,1,3.164.422C21.347,28.034,20.18,29.77,18.984,30.417Zm3.164-.4a14.518,14.518,0,0,0,1.863-3.832,19.211,19.211,0,0,1,2.672,1.1A12.87,12.87,0,0,1,22.148,30.016Zm5.871-4.2a21.42,21.42,0,0,0-3.495-1.477,27.545,27.545,0,0,0,.689-5.351H30.67A12.542,12.542,0,0,1,28.02,25.812Z" transform="translate(-3.375 -3.375)" />
                                </NavSVGIcon>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu shadow bg-white -ml-3">
                                <Flags />
                            </ul>
                        </div>

                        {/* search bar */}
                        <NavSVGIcon onClick={() => { setSearch(true) }}>
                            <path d="M23.731,21.471H22.5l-.462-.386a10.212,10.212,0,0,0,2.385-6.557A9.962,9.962,0,1,0,14.5,24.557a10.31,10.31,0,0,0,6.538-2.391l.461.386v1.234L29.192,31.5,31.5,29.186Zm-9.231,0a6.943,6.943,0,1,1,6.923-6.943A6.9,6.9,0,0,1,14.5,21.471Z" transform="translate(-4.5 -4.5)" />
                        </NavSVGIcon>
                    </div>
                </div>

            </motion.nav>
            <MobileNav header={header?.menuList} />
        </>
    )
}

export default Nav
