import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import DetailUser from "../../components/DetailUser";
import style from "./style.module.scss";
import {
  FiPlus,
  FiSettings,
  FiList,
  FiDatabase,
  FiSlack,
} from "react-icons/fi";
import { FaFolderPlus } from "react-icons/fa";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

const Home = () => {
  const { name } = useParams();

  const [forms, setForms] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `/form?storeId=${sessionStorage.getItem("token")}`
      );
      setForms(data);
    })();
  }, []);

  return (
    <Layout>
      <div className={style.container}>
        {name && <DetailUser name={name} />}

        <main>
          <Link to="/newform">
            <div>
              <FaFolderPlus />{" "}
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
            {forms.map((form, index) => (
              <Link key={index} to={`/detail/${form._id}`}>
                <li>
                  <span>{form.name}</span>
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
