import React from "react";
import Nav from "./Nav";
import style from '../../styles/Layout.module.css'
import Footer from "./Footer";
import StepsContact from '../contact/StepsContact'
import { motion } from 'framer-motion'
import { withSizeLessThan } from "../../hooks/useWindowSize";


const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  }


  return (
    <div className={style.main, "relative"}>
      <Nav />
      <div className="lg:h-20 h-14 bg-purple w-full" />
      <StepsContact show={withSizeLessThan(800)} />
      <motion.main variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >{children}</motion.main>
      <StepsContact show={!withSizeLessThan(800)} />
      <Footer />
    </div>
  );
};

export default Layout;
