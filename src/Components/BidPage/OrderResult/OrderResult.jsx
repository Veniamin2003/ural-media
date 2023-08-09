import React from 'react'
import s from "./OrderResult.module.scss"
import ProductItem from "../../Cart/Products/ProductItem/ProductItem";
import OrderItem from "./OrderItem/OrderItem";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function OrderResult(props) {
    let state = props.cartPage;

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let totalCost = numberWithSpaces(state.totalCost);
    let currentDeliveryCost = numberWithSpaces(state.currentDelivery.cost)

    return (
        <div className={s.or_block}>
            <h3>3. Оформление заявки</h3>
            <div className={s.or_content}>
                <div className={s.or_content_block}>
                    <div className={s.result}>
                        <h2>Итого:</h2>
                        <p>{totalCost} ₽</p>
                    </div>

                    <div className={s.products_list}>
                        {state.products.map(el => <OrderItem id={el.id} name={el.name} count={el.count}
                                                             measure={el.measure} price={el.price}
                                                             priceWithoutVat={el.priceWithoutVat}
                                                             summary={el.summary}/>)}
                    </div>

                    {state.currentDelivery.city ?
                        (
                            <div className={s.delivery_content}>
                                <div className={s.delivery}>
                                    <div>Доставка</div>
                                    <div>{currentDeliveryCost} ₽</div>
                                </div>
                                <div>
                                    <div>г. {state.currentDelivery.city}</div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div></div>
                        )
                    }
                    <div className={s.all_weight}>
                        <div>Общий вес</div>
                        <div>{state.totalCountTonn} т</div>
                    </div>

                    <div className={s.btn}>
                        <button className="btn_blue_two_delivery">
                            <div className={s.btn_delivery_text}>
                                Оформить заказ
                            </div>
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default OrderResult;