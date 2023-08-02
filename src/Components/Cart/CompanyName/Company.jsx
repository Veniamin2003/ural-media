import React from 'react'
import s from "./Company.module.scss"
import {TiDeleteOutline} from "react-icons/ti";

function Company(props) {
    let state = props.cartPage;

    let onClearCart = () => {
        props.clearCart();
    }

    return (
        <div className={s.company_container}>
            <div className={s.company_block}>
                <div>
                    <div><h3>Компания ООО "Аверс"</h3></div>
                    <div><p>Склад. Магнитогорск: {state.products.length} позиции, {state.totalCountTonn} т</p></div>
                </div>
                <div className="item__delete">
                    <TiDeleteOutline onClick={onClearCart}/>
                </div>
            </div>
        </div>
    )
}

export default Company;