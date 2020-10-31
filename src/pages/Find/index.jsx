import React, { useState, useRef } from "react";
import Layout from "../../components/Layout";
import style from "./style.module.scss";
import api from "../../services/api";

const Find = () => {
  const inputRef = useRef(null);
  const [clientData, setClientData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await api.get(`/client/${inputRef.current?.value}`);
    setClientData(data);
  };

  return (
    <Layout back>
      <main className={style.container}>
        <h1 className={style.title}>Digite o código do cliente:</h1>

        <form onSubmit={handleSubmit}>
          <input className={style.input} type="text" ref={inputRef} />
        </form>

        {clientData && (
          <div className={style.info}>
            <ul>
              <li>
                Nome:
                <span>{clientData.client.name}</span>
              </li>

              <li>
                CPF:
                <span>{clientData.client.cpf}</span>
              </li>
              <li>
                Email:
                <span>{clientData.client.email}</span>
              </li>
              <li>
                Respostas:
                {clientData.answers.map((answer) => (
                  <>
                    {answer.questions.map((question) => (
                      <div className={style.answer}>
                        <b>{question.name}</b>
                        <span>{question.value}</span>
                      </div>
                    ))}
                  </>
                ))}
              </li>
            </ul>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Find;
