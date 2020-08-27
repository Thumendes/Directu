import React from "react";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import {
  FiPlus,
  FiSettings,
  FiList,
  FiDatabase,
  FiSlack,
} from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [forms, setForms] = useState([
    "Caio Feliz",
    "Arthur Mendes",
    "Ana Beatriz",
    "Isabel Lara",
    "Joao Victor da Silva",
    "Joao Victor da Silva",
    "Joao Victor da Silva",
    "Joao Victor da Silva",
    "Joao Victor da Silva",
    "Joao Victor da Silva",
  ]);

  return (
    <Layout>
      <div className={style.container}>
        <main>
          <div>
            <FiSettings />{" "}
          </div>
          <Link to="/forms">
            <div>
              <FiList />
            </div>
          </Link>
          <div>
            <FiDatabase />
          </div>
          <div>
            <FiSlack />
          </div>
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
