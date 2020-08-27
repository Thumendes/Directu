import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { Form } from "@unform/web";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (data) => {};
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
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Senha" name="password" />
              <div className={style.options}>
                <Checkbox label="Lembrar-me" name="remember" />
                <Link to="/forget-password">Esqueceu a senha?</Link>
              </div>
              <button>Entrar</button>
            </div>
          </Form>
        </div>
      </aside>
    </div>
  );
};

export default Login;
