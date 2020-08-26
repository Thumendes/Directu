import React from "react";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { FiPlus, FiSettings, FiList, FiDatabase, FiSlack } from "react-icons/fi";
import { useState } from "react";

const Home = () => {
  const [forms, setForms] = useState([
    "Caio Feliz",
    "Arthur Mendes",
    "Leticia Maria",
    "Isabel Lara",
    "Joao Victor da Silva",
  ]);
  return (
    <Layout>
      <div className={style.container}>
        <main>
          <div><FiSettings /> </div>
          <div><FiList /></div>
          <div><FiDatabase /></div>
          <div><FiSlack /></div>
        </main>

        <aside>
          <h1>Formulário Padrão</h1>
          <ul>
            {forms.map((name, index) => (
              <li key={index}>
                <span>{name}</span>
                <FiPlus />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Layout>
  );
};

export default Home;
