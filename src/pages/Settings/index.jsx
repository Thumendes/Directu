import React from 'react'
import style from './style.module.scss'
import Layout from '../../components/Layout'
import { FiSettings } from 'react-icons/fi'

const Settings = () => {
    return (
        <Layout back>
            <div className={style.container}>
                <FiSettings />
            </div>
        </Layout>
    )
}

export default Settings
