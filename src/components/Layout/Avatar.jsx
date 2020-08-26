import React from "react";
import style from "./style.module.scss";
import { FiUser } from "react-icons/fi";

const Avatar = () => {
  return (
    <div className={style.avatar}>
      <div className={style.perfil}>
        <FiUser className={style.icone} />
      </div>
      <div className={style.info}>
        <span className={style.name}>Caio Feliz</span>
        <span className={style.store}>Bizzaro</span>
      </div>
    </div>
  );
};

export default Avatar;
