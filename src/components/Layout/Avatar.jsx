import React from "react";
import style from "./style.module.scss";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom"


const Avatar = () => {

  const logado = JSON.parse(localStorage.getItem('user')) 

  return (
    <>
    {
      logado && <div className={style.avatar}>
      <Link to="/user">
        <div className={style.perfil}>
          <FiUser className={style.icone} />
        </div>
      </Link>
      <div className={style.info}>
        <span className={style.name}>{logado.name}</span>
        <span className={style.store}>Bizzaro</span>
      </div>
    </div >
    }
    </>

  );
};

export default Avatar;
