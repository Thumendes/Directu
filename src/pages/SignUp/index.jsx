import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Form/Input";
import { Link } from "react-router-dom";
import api from "../../services/api";
import InputMask from "react-input-mask";

const SignUp = () => {
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const response = await api.post("/store", data);

      console.log(response);

      history.push("/auth");
    } catch (error) {
      alert("Erro ao cadastrar Loja");
    }
  };

  return (
    <div className={style.container}>
      <aside className={style.formContainer}>
        <div className="card">
          <header>
            <span>Cadastro</span>
          </header>
          <Form onSubmit={handleSubmit}>
            <div className={style.form}>
              <Input name="name" placeholder="Nome" />
              <InputMask mask="99.999.999/9999-99">
                {(inputProps) => (
                  <Input {...inputProps} placeholder="CNPJ" name="cnpj" />
                )}
              </InputMask>
              <Input placeholder="Image URL" type="text" name="imageURL" />
              <Input placeholder="Senha" type="password" name="password" />
              <button type="submit">Cadastrar</button>
              <Link to="/auth" className={style.link}>
                Já tem conta?
              </Link>
            </div>
          </Form>
        </div>
      </aside>
      <aside className={style.logoContainer}>
        <img src={logo} alt="Logo da Directu" />
      </aside>
    </div>
  );
};

export default SignUp;
