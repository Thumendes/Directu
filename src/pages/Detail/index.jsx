import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { FiXCircle } from "react-icons/fi";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";

const Detail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.card}>
            <ul className={style.list}>
              <li>Nome</li>
              <li>Data de criação</li>
              <li>Número de respostas</li>
              <li>Intenção</li>
              <li>Vantagens</li>
            </ul>
          </div>
          <div className={style.card}>
            <FiXCircle className={style.x} />
            <div className={style.buttons}>
              <button className={style.arquivar}>Arquivar</button>
              <button className={style.deletar}>Deletar</button>
            </div>
          </div>
        </div>
        <div className={style.answers}>
          <main>Nenhuma</main>
          <div className={style.divisor}></div>
          <aside>
            <Form>
              <Input name="search" />
            </Form>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
