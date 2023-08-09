import React from 'react'
import s from "./DeliveryCart.module.scss"
import {TiDeleteOutline} from "react-icons/ti";

function DeliveryCart(props) {
    let state = props.cartPage;

    let onDeleteDelivery = () => {
        props.deleteDelivery();
        props.updateResult();
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let cost = numberWithSpaces(props.cost);
    return (
        <div className={s.delivery_item}>
            <div className={s.delivery_item__header}>
                <p>Доставка в г. {props.city}</p>
            </div>
            <div>
                <p>{cost} ₽</p>
            </div>
            <div className="item__delete">
                <TiDeleteOutline onClick={onDeleteDelivery}/>
            </div>
        </div>
    )
}

export default DeliveryCart;