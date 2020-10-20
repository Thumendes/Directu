import React, { useState, useRef } from 'react'
import Layout from '../../components/Layout'
import style from "./style.module.scss";
import { FiUser } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import Back from '../../components/Back'
import api from '../../services/api';


const Find = () => {
    const { id } = useParams()

    const inputRef = useRef(null)
    const [clientData, setClientData] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await api.get(`/client/${inputRef.current?.value}`)
        setClientData(data)

    }

    return (
        <Layout back>
            <main className={style.container}>

                <div className={style.text}>
                    <h1>Digite o código do cliente:</h1>
                </div>

                <form className={style.input} onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} />
                </form>

                {clientData &&
                    <div className={style.info}>
                        <div className={style.box}>
                            <span>Nome:</span> 
                            <h1>{clientData[0].name}</h1>
                        </div>
                        <div className={style.box}>
                            <span>Genero:</span> 
                            <h1>{clientData[0].gender}</h1>
                        </div>
                        <div className={style.box}>
                            <span>Idade:</span> 
                            <h1>{clientData[0].age}</h1>
                        </div>
                        <div className={style.box}>
                            <span>Email:</span> 
                            <h1>{clientData[0].email}</h1>
                        </div>
    
                    </div>
                }

            </main>
        </Layout>
    )
}

export default Find
