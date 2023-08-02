import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import s from "./Navigate.module.scss"

function Navigate(props) {
    let state = props.cartPage;

    return (
        <div className={s.navigate}>
            <a>Главная</a>
            <div><BsArrowRight/></div>
            <a>Корзина</a>
        </div>
    )
}

export default Navigate;