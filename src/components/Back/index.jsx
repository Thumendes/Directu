import React from 'react'
import { FiCornerUpLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Back = () => {
    return (
        <Link to="/">
            <FiCornerUpLeft className={style.svg} />
        </Link>
    )
}

export default Back
