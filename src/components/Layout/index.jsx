import React from "react";
import logo from "../../assets/images/logo.png";
import style from "./style.module.scss";
import Avatar from "./Avatar.jsx";
import Back from "../../components/Back"

const Layout = ({back, children }) => {
  return (
    <>
      <nav className={style.nav}>
        <Avatar />
        <img src={logo} alt="Directu" className={style.logo} />
      </nav>

        {back && <Back />}

      {children}
      <footer className={style.footer}></footer>
    </>
  );
};

export default Layout;
