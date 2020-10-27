import React, { useState } from "react";
import style from "./style.module.scss";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import api from "../../services/api";

const Avatar = () => {
  const [signed, setSigned] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `store/${sessionStorage.getItem("token")}`
      );
      setSigned(data);
    })();
  }, []);

  return (
    <div className={style.avatar}>
      {signed && (
        <>
          <Link to="/user">
            {signed.imageURL ? (
              <img
                src={signed.imageURL}
                alt={signed.name}
                className={style.icone}
              />
            ) : (
              <FiUser className={style.icone} />
            )}
          </Link>
          <div className={style.info}>
            <span className={style.name}>Loja</span>
            <span className={style.store}>{signed.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Avatar;
