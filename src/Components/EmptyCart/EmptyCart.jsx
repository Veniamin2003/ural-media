import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import s from "./EmptyCart.module.scss"
import Navigate from "../Cart/Navigate/Navigate";

function EmptyCart(props) {
    let state = props.cartPage;

    return (
        <div className={s.empty_cart__container}>
            <div className={s.empty_cart__block}>

                <div className={s.navigate}>
                    <Navigate />
                </div>
                <div>
                    <h2>Корзина</h2>
                </div>
                <div>
                    <p>В вашей корзине пока ничего нет.</p>
                </div>
                <div className={s.btn_block}>
                    <div className={s.btn}>
                        <button className="btn_blue_two">
                            За покупками
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmptyCart;