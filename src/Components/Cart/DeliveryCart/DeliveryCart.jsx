import React from 'react'
import s from "./DeliveryCart.module.scss"
import {TiDeleteOutline} from "react-icons/ti";

function DeliveryCart(props) {
    let state = props.cartPage;

    return (
        <div className={s.delivery_item}>
            <div className={s.delivery_item__header}>
                <p>Доставка в {props.city}</p>
            </div>
            <div>
                <p>{props.cost}</p>
            </div>
            <div className="item__delete">
                <TiDeleteOutline />
            </div>
        </div>
    )
}

export default DeliveryCart;