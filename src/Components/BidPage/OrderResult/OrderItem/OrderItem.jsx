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
                <div className={s.name}>{props.name}, {props.count} шт.</div>
                <div>{summary} ₽</div>
            </div>
        </div>
    )
}

export default OrderItem;