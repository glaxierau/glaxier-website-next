import React from 'react'
import LanguageSection from '../common/LanguageSection'
import SearchBox from '../common/SearchBox'
import MobileNavList from '../common/MobileNavList'
import { motion } from 'framer-motion'
import navigation from '../../config/navList'

const SideBar = ({ nav, header, open, setNav }) => {
    return (
        <>
            <motion.ul className={`w-screen absolute top-14 left-0 z-0 overflow-y-scroll`}
                initial={{ opacity: 0, borderRadius: '0px 0px 40px 40px' }}
                animate={{ opacity: 1, height: open ? '100vh' : '0vh', display: open ? 'block' : 'none' }}
                transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}>
                <motion.li className=" bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ y: open ? 0 : -2, opacity: open ? 1 : 0, height: open ? '100vh' : '0vh' }}
                    transition={{ stiffness: 100, duration: 0.2, staggerChildren: 0.5, delayChildren: 0.4 }}>
                    <img src="/assets/svg/shape.svg" alt="shape" />
                    <div className="w-screen h-screen bg-white-dark py-2 px-5">
                        <LanguageSection />
                        <br />
                        <br />
                        <MobileNavList nav={nav} header={header} setNav={setNav} />
                        {/* <div style={{ height: '1px' }} className="my-10 mx-auto w-full bg-purple" /> */}
                        {/* <SearchBox /> */}
                    </div>
                </motion.li>
            </motion.ul>
        </>
    )
}

export default SideBar
