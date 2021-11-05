import React from "react";
import Nav from "./nav";
import style from '../../styles/Layout.module.css'
import Footer from "./footer";


const Layout = ({ children }) => {
  return (
    <div className={style.main}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
