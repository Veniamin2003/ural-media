import React from 'react'
import s from "./OrderResult.module.scss"
import ProductItem from "../../Cart/Products/ProductItem/ProductItem";
import OrderItem from "./OrderItem/OrderItem";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function OrderResult(props) {
    let state= props.cartPage;

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let totalCost = numberWithSpaces(state.totalCost);

    return (
        <div className={s.or_block}>
            <h3>3. Оформление заявки</h3>
            <div className={s.or_content}>
                <div className={s.result}>
                    <h2>Итого:</h2>
                    <p>{totalCost} ₽</p>
                </div>

                {state.products.map(el => <OrderItem id={el.id} name={el.name} count={el.count}
                                                     measure={el.measure} price={el.price}
                                                     priceWithoutVat={el.priceWithoutVat} summary={el.summary}/>)}
                {state.currentDelivery.city ?
                    (
                        <div>
                            <div className={s.delivery}>
                                <p>Доставка</p>
                                <p>{state.currentDelivery.cost} ₽</p>
                            </div>
                            <div>
                                <p>г. {state.currentDelivery.city}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div></div>
                    )
                }



                {/*<div>
                    <div className={s.delivery}>
                        <p>Доставка</p>
                        <p>{state.currentDelivery.cost} ₽</p>
                    </div>
                    <div>
                        <p>г. {state.currentDelivery.city}</p>
                    </div>
                </div>*/}

                <div className={s.all_weight}>
                    <p>Общий вес</p>
                    <p>{state.totalCountTonn} т</p>
                </div>

                <button className="btn_blue_two_delivery">
                    <div className={s.btn_delivery_text}>
                        Оформить заказ
                    </div>
                </button>
            </div>


        </div>
    )
}

export default OrderResult;