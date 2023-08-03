import React from 'react'
import s from "./OrderItem.module.scss"

function OrderItem(props) {
    let state= props.cartPage;

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let summary = numberWithSpaces(props.summary);

    return (
        <div className={s.or_item_block}>
            <div className={s.or_item}>
                <p>{props.name}, {props.count} шт.</p>
                <p>{summary} ₽</p>
            </div>
        </div>
    )
}

export default OrderItem;