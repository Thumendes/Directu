import React, { useState, useContext } from 'react'
import style from './style.module.scss'
import { ImPlus } from "react-icons/im";
import Layout from '../../components/Layout'
import { FiPlusCircle, FiXSquare, FiSave } from 'react-icons/fi'
import Question from '../../components/Question'
import {Context} from '../../context/FormContext'
import InputMask from 'react-input-mask'

const NewForm = () => {
    const { questions, addQuestion } = useContext(Context);

    const [form, setForm] = useState({
        name: "",
        description: "",
        questions
    });

    const handleSubmitForm = async () => {
        console.log(form)
    }
    
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
                            onChange={({ target }) => setForm({ ...form, name: target.value })}
                        />
                    </div>
                    <div className={style.description}>
                        <span>Descrição</span>
                        <input 
                            type="text" 
                            placeholder="Descreva seu form"
                            value={form.description}
                            onChange={({ target }) => setForm({ ...form, description: target.value })}  
                        />
                    </div>
                </div>

                <div className={style.body}>
                    {questions &&
                        questions.map((question, index) => (
                        <Question key={index} index={index} />
                    ))}
                </div>

                <footer className={style.footer}>
                    <button className={style.addQuestion} onClick={addQuestion}>
                        <ImPlus />
                        Adicionar questão
                    </button>

                    <button className={style.save} onClick={handleSubmitForm}>
                        <FiSave />
                        Salvar
                    </button>
                </footer>
            </div>
        </Layout>
    )
}

export default NewForm
