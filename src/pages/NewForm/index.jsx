import React, { useState, useContext } from "react";
import style from "./style.module.scss";
import Layout from "../../components/Layout";
import { FiSave } from "react-icons/fi";
import Question from "../../components/Question";
import { Context } from "../../context/FormContext";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const NewForm = () => {
  const { questions } = useContext(Context);
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    description: "",
    discount: null,
    questions,
    storeId: sessionStorage.getItem("token"),
  });

  const handleSubmitForm = async () => {
    const response = await api.post("form", form);

    if (response.status === 200) {
      history.push("/");
    }
  };

  return (
    <Layout back>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>
            <span>Título</span>
            <input
              type="text"
              placeholder="Título do Formulário"
              value={form.name}
              onChange={({ target }) =>
                setForm({ ...form, name: target.value })
              }
            />
          </div>
          <div className={style.description}>
            <span>Descrição</span>
            <input
              type="text"
              placeholder="Descreva seu form"
              value={form.description}
              onChange={({ target }) =>
                setForm({ ...form, description: target.value })
              }
            />
          </div>
          <div className={style.description}>
            <span>Benefício</span>
            <input
              type="number"
              placeholder="Valor do Benefício ao responder o formulário"
              value={form.discount}
              onChange={({ target }) =>
                setForm({ ...form, discount: target.value })
              }
            />
          </div>
        </div>
        <div className={style.body}>
          <Question index={0} />
          <Question index={1} />
          <Question index={2} />
        </div>
        <footer className={style.footer}>
          <button className={style.save} onClick={handleSubmitForm}>
            <FiSave />
            Salvar
          </button>
        </footer>
      </div>
    </Layout>
  );
};

export default NewForm;
