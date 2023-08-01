import React from 'react'
import s from "./Order.module.scss"

import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";


function Order(props) {
    let state = props.cartPage;
    let isDeliveryBlock = false;

    return (
        <div className={s.order_container}>
            {isDeliveryBlock ?
                (
                    <button className="btn_blue">
                        <AiOutlinePlus/>
                        <div className={s.btn_delivery_text}>
                            Добавить доставку
                        </div>
                    </button>
                )
                :
                (
                    <button className="btn_blue_two">
                        <AiOutlineMinus/>
                        <div className={s.btn_delivery_text}>
                            Удалить доставку
                        </div>
                    </button>
                )
            }



            <button className="btn_red">
                <div className={s.btn_delivery_text}>
                    Оформить заказ
                </div>
            </button>
        </div>
    )
}

export default Order;