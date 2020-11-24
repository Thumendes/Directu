import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import InputMask from "react-input-mask";
import DropzoneInput from "../../components/Form/Dropzone";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const data = new FormData();

      for (let key in form) {
        data.append(key, form[key]);
      }

      if (image) {
        data.append("image", image);
      }

      const response = await api.post("/store", data);
      console.log(image);

      console.log(response);

      history.push("/auth");
    } catch (error) {
      alert("Erro ao cadastrar Loja");
    }
  };

  const handleChangeInput = ({ target }) => {
    const { value, name } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={style.container}>
      <div>
        <nav>
          <img src={logo} alt="Logo da Directu" />
          <button onClick={handleSubmit}>Cadastrar</button>
        </nav>
        <main>
          <section>
            <header>
              <span>Informações</span>
            </header>
            <div className={style.form}>
              <div>
                <input
                  placeholder="Nome"
                  type="text"
                  name="name"
                  onChange={handleChangeInput}
                />
                <InputMask
                  mask="99.999.999/9999-99"
                  onChange={handleChangeInput}
                >
                  {(inputProps) => (
                    <input {...inputProps} placeholder="CNPJ" name="cnpj" />
                  )}
                </InputMask>
              </div>
              <DropzoneInput onDropImage={setImage} />
            </div>
          </section>
          <section>
            <header>
              <span>Endereço</span>
            </header>
            <div className={style.form}>
              <div>
                <InputMask mask="99.999-999" onChange={handleChangeInput}>
                  {(inputProps) => (
                    <input {...inputProps} placeholder="CEP" name="cep" />
                  )}
                </InputMask>
                <input
                  placeholder="Rua"
                  type="text"
                  name="road"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  onChange={handleChangeInput}
                />
                <input
                  type="text"
                  placeholder="Número"
                  name="number"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </section>
          <section>
            <header>
              <span>Conta</span>
            </header>
            <div className={style.form}>
              <InputMask mask="(99) 99999-9999" onChange={handleChangeInput}>
                {(inputProps) => (
                  <input {...inputProps} placeholder="Telefone" name="phone" />
                )}
              </InputMask>
              <input
                placeholder="Senha"
                type="password"
                name="password"
                onChange={handleChangeInput}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
