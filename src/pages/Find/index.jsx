import React, { useState } from 'react'
import Layout from '../../components/Layout'
import style from "./style.module.scss";
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Back from '../../components/Back'


const Find = () => {

    const [clientData, setClientData] = useState([])

    const handleInputSubmit = (e) => {
        if (e.key == 'Enter') {
            setClientData(['Caio Félix', '18 anos', 'Masculino'])
        }
    }

    return (
        <Layout back>
            <main className={style.container}>
                <div className={style.text}>
                    <h1>Digite o código do cliente:</h1>
                </div>
                <div className={style.input}>
                    <input type="text" onKeyDown={handleInputSubmit} />
                    <div></div>
                </div>

                <div className={style.info}>
                    {
                        clientData.length &&
                        clientData.map( (e) => (
                       
                            <div key={e} className={style.box}>
                                {e}
                            </div>

                        ))
                    }
                </div>

            </main>
        </Layout>
    )
}

export default Find
