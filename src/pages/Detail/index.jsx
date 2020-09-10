import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { FiXCircle } from "react-icons/fi";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";

const answers = [
  {
    "id": 0,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 2,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 3,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 4,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 5,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 6,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 7,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 8,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 9,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  },
  {
    "id": 10,
    "pgt1": "lorem",
    "pgt2": "ipsum",
    "pgt3": "indolor",
    "pgt4": "arthur"
  }
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
          <Form onSubmit={handleSubmitForm}>
            <Input name="search" />
          </Form>
          <table cellPadding={0} cellSpacing={0}>
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
                if(!search) return true
                ["ptg1", 'ptg2', 'ptg3', 'ptg4'].foreach(pgt => {
                  if(answer[pgt].includes(search)) return true
                  return false
                })
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
