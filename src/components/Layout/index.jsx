import React from "react";
import logo from "../../assets/images/logo.png";
import style from "./style.module.scss";
import Avatar from "./Avatar.jsx";
import Back from "../../components/Back"
import { Link } from "react-router-dom"

const Layout = ({ back, children }) => {
  return (
    <>
      <nav className={style.nav}>
        <Avatar />
        <Link to="/">
          <img src={logo} alt="Directu" className={style.logo} />
        </Link>
      </nav>

      {back && <Back />}

      {children}
      <footer className={style.footer}></footer>
    </>
  );
};

export default Layout;
