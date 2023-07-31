import React from 'react'
import s from "./Cart.module.scss"
import ProductsContainer from "./Products/ProductsContainer";


function Cart(props) {
    let state = props.cartPage;

    return (
        <div className={s.cart_container}>
            <div className={s.cart_block}>
                <ProductsContainer />
            </div>
        </div>
    )
}

export default Cart;