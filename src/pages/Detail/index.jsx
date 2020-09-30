import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { FiXCircle } from "react-icons/fi";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";

const answers = [
  {
    id: 0,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Arthur"
  },
  {
    id: 2,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Leticia"
  },
  {
    id: 3,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Julia"
  },
  {
    id: 4,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Bosta"
  },
  {
    id: 5,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Lindo"
  },
  {
    id: 6,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Lindo"
  },
  {
    id: 7,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Lindo"
  },
  {
    id: 8,
    pgt1: "lorem",
    pgt2: "ipsum",
    pgt3: "indolor",
    pgt4: "Lindo"
  },
]

const Detail = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("")

  const handleSubmitForm = (data) => {
    setSearch(data.search)
  }

  return (
    <Layout back>
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
          <div class={style.box}>

          <Form onSubmit={handleSubmitForm}>
            <Input name="search" />
          </Form>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Pergunta 1</td>
                <td>Pergunta 2</td>
                <td>Pergunta 3</td>
                <td>Pergunta 4</td>
              </tr>
            </thead>
            <tbody>
              {answers.filter(answer => {
                if (!search) {
                  return true
                }
                let response = false;
                for(let key in answer){
                  if(typeof answer[key] === "string" && answer[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    response = true
                  }
                }
                return response;
              }).map(value => (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.pgt1}</td>
                  <td>{value.pgt2}</td>
                  <td>{value.pgt3}</td>
                  <td>{value.pgt4}</td>
                </tr>

              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
