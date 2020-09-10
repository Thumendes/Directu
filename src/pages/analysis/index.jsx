import React, { useState } from "react";
import Layout from "../../components/Layout";
import style from "./style.module.scss";

const Analysis = () => {

  const [target, setTarget] = useState(null)

  return (
    <Layout back>
      <div className={style.container}>
        <aside>
          <h1>Análise rápida dos Resultados</h1>
          {[1210, 5210, 551].map(form => (
            <div className={`${style.form} ${target === form && style.active}`} onClick={() => setTarget(form)}>
              <h1>Nome do Formulário</h1>
              <ul>
                <li>
                  <b>Número de respostas</b>
                  <h2>{form}</h2>
                </li>
              </ul>
            </div>
          ))}
        </aside>
        <aside>
          <h1>Gráfico</h1>
          <h1>{target}</h1>
        </aside>
      </div>
    </Layout>
  );
};

export default Analysis;
