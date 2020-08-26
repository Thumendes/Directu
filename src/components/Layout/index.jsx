import React from "react";
import logo from "../../assets/images/logo.png";
import style from "./style.module.scss";
import Avatar from "./Avatar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <nav className={style.nav}>
        <Avatar />
        <img src={logo} alt="Directu" className={style.logo} />
      </nav>
      {children}
      <footer className={style.footer}></footer>
    </>
  );
};

export default Layout;
