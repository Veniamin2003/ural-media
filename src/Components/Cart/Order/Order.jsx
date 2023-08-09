import React from 'react'
import s from "./Order.module.scss"

import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


function Order(props) {
    let state = props.cartPage;

    const navigate = useNavigate();

    let isDeliveryBlock = state.isDeliveryBlockActive;

    let activateDeliveryBlock = () => {
        props.changeDeliveryBlock(true);
    }
    let deactivateDeliveryBlock = () => {
        props.changeDeliveryBlock(false);
    }

    const openBid = () => {
        navigate('/cart/order');
    }


    return (
        <div className={s.order_container}>
            {isDeliveryBlock ?
                (
                    <div className={s.btn}>
                        <button className="btn_blue_two" onClick={deactivateDeliveryBlock}>
                            <AiOutlineMinus/>
                            <div className={s.btn_delivery_text}>
                                Удалить доставку
                            </div>
                        </button>
                    </div>
                )
                :
                (
                    <div className={s.btn}>
                        <button className="btn_blue" onClick={activateDeliveryBlock}>
                            <AiOutlinePlus/>
                            <div className={s.btn_delivery_text}>
                                Добавить доставку
                            </div>
                        </button>
                    </div>
                )
            }
            <div className={s.btn_order}>
                <button className="btn_red" onClick={openBid}>
                    <div className={s.btn_delivery_text}>
                        Оформить заказ
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Order;