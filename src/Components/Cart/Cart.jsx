import React from 'react'
import s from "./Cart.module.scss"
import ProductsContainer from "./Products/ProductsContainer";
import DeliveryCartContainer from "./DeliveryCart/DeliveryCartContainer";
import ResultsContainer from "./Results/ResultsContainer";
import DeliveryContainer from "./Delivery/DeliveryContainer";
import OrderContainer from "./Order/OrderContainer";
import CompanyContainer from "./CompanyName/CompanyContainer";
import CountProductContainer from "./CountProduct/CountProductContainer";
import Navigate from "./Navigate/Navigate";


function Cart(props) {
    return (
        <div className={s.cart_container}>
            <div className={s.cart_block}>
                <Navigate />
                <CountProductContainer />
                <CompanyContainer />
                <ProductsContainer />
                <DeliveryCartContainer />
                <ResultsContainer />
                <OrderContainer />
                <DeliveryContainer />
            </div>
        </div>
    )
}

export default Cart;