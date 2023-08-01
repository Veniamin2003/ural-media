import React from 'react'
import s from "./Cart.module.scss"
import ProductsContainer from "./Products/ProductsContainer";
import DeliveryCartContainer from "./DeliveryCart/DeliveryCartContainer";
import ResultsContainer from "./Results/ResultsContainer";
import Order from "./Order/Order";
import DeliveryContainer from "./Delivery/DeliveryContainer";


function Cart(props) {
    let state = props.cartPage;

    return (
        <div className={s.cart_container}>
            <div className={s.cart_block}>
                <ProductsContainer />
                <DeliveryCartContainer />
                <ResultsContainer />
                <Order />
                <DeliveryContainer />
            </div>
        </div>
    )
}

export default Cart;