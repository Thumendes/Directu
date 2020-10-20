import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import { FiXCircle } from "react-icons/fi";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";
import {useHistory} from 'react-router-dom'

import api from '../../services/api'

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
  const [form, setForm] = useState({})
  const [questions, setQuestions] = useState([])

  const history = useHistory()

  const handleSubmitForm = (data) => {
    setSearch(data.search)

  }

  const handleDeleteClick = () => {
    api.delete(`/form/${id}`).then(() =>  alert('Deletado com sucesso'))
    history.push('/')
  }

  useEffect(() => {
    api.get(`/form/${id}`).then(({ data }) => {
      setForm(data)
      setQuestions(data.questions)
    })
  }, [])

  return (
    <Layout back>
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.card}>

            <ul className={style.list}>
              <li>Nome: <span>{form.name}</span></li>
              <li>Data de criação: <span>{form.createdAt}</span></li>
              <li>Número de respostas: <span>{Math.floor(Math.random() * 20)}</span></li>
              {/* <li>Intenção: <span>{form.name}</span></li>
              <li>Vantagens: <span>{form.name}</span></li> */}
            </ul>

          </div>
          <div className={style.card}>
            <FiXCircle className={style.x} />
            <div className={style.buttons}>
              <button className={style.deletar} onClick={handleDeleteClick}>Deletar</button>
            </div>
          </div>
        </div>
        <div className={style.answers}>
          <div className={style.box}>

            <Form onSubmit={handleSubmitForm}>
              <Input name="search" />
            </Form>
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  {
                    questions.map(question => (
                      <td>{question.name}</td>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {answers.filter(answer => {
                  if (!search) {
                    return true
                  }
                  let response = false;
                  for (let key in answer) {
                    if (typeof answer[key] === "string" && answer[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
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
