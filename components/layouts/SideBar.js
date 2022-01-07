import React from 'react'
import LanguageSection from '../common/LanguageSection'
import SearchBox from '../common/SearchBox'
import MobileNavList from '../common/MobileNavList'
import { motion } from 'framer-motion'
import navigation from '../../config/navList'

const SideBar = ({ open, setNav }) => {
    const navs = navigation.navigation
    return (
        <>
            <motion.div className={` w-screen absolute top-14 left-0 z-0`}
                initial={{ opacity: 0, borderRadius: '0px 0px 40px 40px' }}
                animate={{ opacity: 1, height: open ? 'auto' : '0vh', display: open ? 'block' : 'none' }}
                transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}>
                <motion.div className=" bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ y: open ? 0 : -2, opacity: open ? 1 : 0, height: open ? '100vh' : '0vh' }}
                    transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}>
                    <img src="/assets/svg/shape.svg" alt="shape" />
                    <div className="w-screen bg-white-dark py-2 px-5">
                        <LanguageSection />
                        <br />
                        <br />
                        <MobileNavList navs={navs} setNav={setNav} />
                        <div style={{ height: '1px' }} className="my-10 mx-auto w-full bg-purple" />
                        <SearchBox />
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SideBar
