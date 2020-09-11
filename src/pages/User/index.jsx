import React from 'react'
import style from "./style.module.scss"
import Layout from "../../components/Layout"
import {FiUser} from "react-icons/fi"

const User = () => {
    return (
        <Layout back>
            <div className={style.container}>
                <div className={style.avatar}>
                    <FiUser />
                </div>
                <div className={style.name}>
                    <h1>Caio Feliz</h1>
                </div>
                <div className={style.store}>
                    <p>Bizarro</p>
                </div>
            </div>
        </Layout>
    )
}

export default User
