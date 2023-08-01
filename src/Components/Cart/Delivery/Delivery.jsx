import React from 'react'
import s from "./Delivery.module.scss"

function Delivery(props) {
    let state = props.cartPage;

    return (
        <div className={s.delivery_container}>
            <div className={s.city}>
                <div>Укажите город</div>
                <div>
                    <input/>
                </div>

            </div>
            <div className={s.price_elem}>
                <div className={s.price_text}>Стоимость</div>
                <div >
                    <div className={s.price}>50000P</div>
                </div>
            </div>
            <div className={s.btn_block}>
                <button className="btn_red_empty">Подтвердить</button>
            </div>
        </div>
    )
}

export default Delivery;