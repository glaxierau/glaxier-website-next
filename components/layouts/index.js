import React from "react";
import Nav from "./Nav";
import style from '../../styles/Layout.module.css'
import Footer from "./Footer";
import StepsContact from '../contact/StepsContact'
import { motion } from 'framer-motion'
import { useSizeLessThan } from "../../hooks/useWindowSize";


const Layout = (props) => {
  const { children, nav } = props
  const variants = {
    hidden: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <div className={[style.main, "relative"]}>
      <Nav nav={nav} />
      <div className="lg:h-20 h-14 bg-purple w-full" />
      <StepsContact show={useSizeLessThan(800)} />
      <motion.main variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >{children}</motion.main>
      <StepsContact show={!useSizeLessThan(800)} />
      <Footer />
    </div>
  );
};

export default Layout;
