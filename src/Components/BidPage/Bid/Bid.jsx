import React from 'react'
import s from "./Bid.module.scss"
import {BsArrowRight} from "react-icons/bs";
import ClientDataContainer from "../ClientData/ClientDataContainer";
import DeliveryTypeContainer from "../DeliveryType/DeliveryTypeContainer";
import OrderResultContainer from "../OrderResult/OrderResultContainer";

function Bid(props) {
    return (
        <div className={s.bid_container}>
            <div className={s.bid_block}>
                <div>
                    <div className={s.navigate}>
                        <a>Главная</a>
                        <div><BsArrowRight/></div>
                        <a>Корзина</a>
                        <div><BsArrowRight/></div>
                        <a>Оформление зявки на заказ</a>
                    </div>
                    <h1>Оформление заявки</h1>
                </div>

                <div className={s.bid_content}>
                    <ClientDataContainer />
                    <DeliveryTypeContainer />
                    <OrderResultContainer />
                </div>
            </div>
        </div>
    )
}

export default Bid;