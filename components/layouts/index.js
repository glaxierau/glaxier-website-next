import React from "react";
import Nav from "./Nav";
import style from '../../styles/Layout.module.css'
import Footer from "./Footer";
import StepsContact from '../contact/StepsContact'
import { AnimatePresence, motion } from 'framer-motion'


const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  }
  return (
    <div className={style.main, "lg:mt-20 mt-14"}>
      <Nav />
      <AnimatePresence>
        <motion.main variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}>{children}</motion.main>
      </AnimatePresence>
      <StepsContact />
      <Footer />
    </div>
  );
};

export default Layout;
