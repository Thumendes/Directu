import React from "react";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DecideClassName from "../../helpers/DecideClassName";

const Forms = () => {
  const [forms, setForms] = useState(Array(20).fill(0));
  const [current, setCurrent] = useState(0);

  const handleClickNext = () => {
    if (current === forms.length - 1) {
      return setCurrent(0);
    }
    setCurrent(current + 1);
  };

  const handleClickPrev = () => {
    if (current === 0) {
      return setCurrent(forms.length - 1);
    }

    setCurrent(current - 1);
  };

  return (
    <Layout>
      <div className={style.container}>
        {forms.map((form, index) => (
          <section
            key={index}
            className={style[DecideClassName(current, index, forms.length)]}
          >
            <header>Formulário {index + 1}</header>
            <main>
              <span>
                respostas
                <p>{Math.floor(Math.random() * 20)}</p>
              </span>
              <Link to={`/detail/${index}`}>
                <button>Ver detalhes</button>
              </Link>
            </main>
          </section>
        ))}
        <div className={style.buttons}>
          <button className={style.next} onClick={handleClickNext}>
            <FiArrowRight />
          </button>
          <button className={style.prev} onClick={handleClickPrev}>
            <FiArrowLeft />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Forms;
