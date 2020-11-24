import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Form/Input";
import { Link } from "react-router-dom";
import api from "../../services/api";
import InputMask from "react-input-mask";

const Login = () => {
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const { data: response } = await api.post("/authadmin", data);

      if (response.error) {
        alert(response.error);
        return;
      }

      sessionStorage.setItem("token", response.token);

      history.push("/");
    } catch (error) {
      alert("Senha ou email errados");
    }
  };

  return (
    <div className={style.container}>
      <aside className={style.logoContainer}>
        <img src={logo} alt="Logo da Directu" />
      </aside>
      <aside className={style.formContainer}>
        <div className="card">
          <header>
            <span>Login</span>
          </header>
          <Form onSubmit={handleSubmit}>
            <div className={style.form}>
              <InputMask mask="99.999.999/9999-99">
                {(inputProps) => (
                  <Input {...inputProps} placeholder="CNPJ" name="cnpj" />
                )}
              </InputMask>
              <Input placeholder="Senha" type="password" name="password" />
              <button type="submit">Entrar</button>
            </div>
          </Form>
        </div>
      </aside>
    </div>
  );
};

export default Login;
