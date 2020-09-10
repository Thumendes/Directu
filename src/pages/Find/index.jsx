import React from 'react'
import Layout from '../../components/Layout'
import style from "./style.module.scss";
import { FiCornerUpLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Back from '../../components/Back'


const Find = () => {
    return (
        <Layout back>
            <main className={style.container}>
                <div className={style.text}>
                    <h1>Digite o código do cliente:</h1>
                </div>
                <div className={style.input}>
                    <input type="text" />
                    <div></div>
                </div>
            </main>
        </Layout>
    )
}

export default Find
