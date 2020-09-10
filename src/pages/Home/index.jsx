import React from "react";
import Layout from "../../components/Layout";
import DetailUser from '../../components/DetailUser'
import style from "./style.module.scss";
import {
  FiPlus,
  FiSettings,
  FiList,
  FiDatabase,
  FiSlack,
} from "react-icons/fi";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


const Home = () => {
  const { name } = useParams();

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


        {
          name && <DetailUser name={name}/>
        }


        <main>
          <Link to="/settings">
            <div>
              <FiSettings />{" "}
            </div>
          </Link>
          <Link to="/forms">
            <div>
              <FiList />
            </div>
          </Link>
          <Link to="/analysis">
            <div>
              <FiDatabase />
            </div>
          </Link>
          <Link to="/find">
            <div>
              <FiSlack />
            </div>
          </Link>
        </main>

        <aside>
          <h1>Formulário Padrão</h1>
          <ul>
            {forms.map((name, index) => (
              <Link key={index} to={`/detailUser/${name}`}>
                <li  >
                  <span>{name}</span>
                  <FiPlus />
                </li>
              </Link>
            ))}
          </ul>
        </aside>
      </div>
    </Layout>
  );
};

export default Home;
