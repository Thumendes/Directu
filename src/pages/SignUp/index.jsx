import React, { useEffect } from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import InputMask from "react-input-mask";
import DropzoneInput from "../../components/Form/Dropzone";
import { useState } from "react";
import Axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    cnpj: "",
    cep: "",
    city: "",
    road: "",
    state: "",
    number: "",
    phone: "",
    email: "",
    password: "",
  });
  const [ufs, setUfs] = useState([]);
  const [image, setImage] = useState(null);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setUfs(data.map((uf) => uf.sigla));
    })();
  }, []);

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

      history.push("/auth");
    } catch (error) {
      alert("Erro ao cadastrar Loja");
    }
  };

  const handleChangeInput = ({ target }) => {
    const { value, name } = target;
    setForm({ ...form, [name]: value });
  };

  const handleCalculateCep = async ({ target }) => {
    const { value } = target;

    const cep = value.replace(/[^\d]+/g, "");

    const { data } = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    setForm({
      ...form,
      road: data.logradouro,
      state: data.uf,
      city: data.localidade,
    });
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
                  value={form.name}
                  onChange={handleChangeInput}
                />
                <input
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChangeInput}
                />
                <InputMask
                  mask="99.999.999/9999-99"
                  onChange={handleChangeInput}
                  value={form.cnpj}
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
                <InputMask
                  mask="99999-999"
                  value={form.cep}
                  onChange={handleChangeInput}
                  onBlur={handleCalculateCep}
                >
                  {(inputProps) => (
                    <input {...inputProps} placeholder="CEP" name="cep" />
                  )}
                </InputMask>
                <input
                  placeholder="Cidade"
                  type="text"
                  value={form.city}
                  name="city"
                  onChange={handleChangeInput}
                />
                <input
                  placeholder="Rua"
                  type="text"
                  value={form.road}
                  name="road"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Estado"
                  value={form.state}
                  name="state"
                  list="UFs"
                  onChange={handleChangeInput}
                />
                <datalist id="UFs">
                  {ufs.map((uf) => (
                    <option value={uf} />
                  ))}
                </datalist>
                <input
                  type="text"
                  placeholder="Número"
                  value={form.number}
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
              <InputMask
                mask="(99) 99999-9999"
                value={form.phone}
                onChange={handleChangeInput}
              >
                {(inputProps) => (
                  <input {...inputProps} placeholder="Telefone" name="phone" />
                )}
              </InputMask>
              <input
                placeholder="Senha"
                type="password"
                value={form.password}
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
