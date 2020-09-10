import React from 'react'
import style from './style.module.scss'
import { useHistory } from 'react-router-dom'


const DetailUser = ({ name }) => {
    const history = useHistory()

    const handleModalClick = ({target}) => {
        if(target.className == 'style_container__If93U'){
            

            history.push('/')
        }
    }
    return (
        <div className={style.container} onClick={handleModalClick}>
            <div className={style.modal} >

                <h1>{name}</h1>

                <div className={style.box}>

                    <div className={style.data}>
                        <div className={style.question}>
                            <p>Lorem ipsum balalaika ?</p>
                        </div>
                        <div className={style.answer}>
                            <p>Ipsum lorem di bixo</p>
                        </div>
                    </div>
                    <div className={style.data}>
                        <div className={style.question}>
                            <p>Lorem ipsum balalaika ?</p>
                        </div>
                        <div className={style.answer}>
                            <p>Ipsum lorem di bixo</p>
                        </div>
                    </div>
                    <div className={style.data}>
                        <div className={style.question}>
                            <p>Lorem ipsum balalaika ?</p>
                        </div>
                        <div className={style.answer}>
                            <p>Ipsum lorem di bixo</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DetailUser
