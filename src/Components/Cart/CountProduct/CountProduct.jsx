import React from 'react'
import s from "./CountProduct.module.scss"

function CountProduct(props) {
    let state = props.cartPage;

    return (
        <div className={s.count_product__container}>
            <div>
                <h2>В корзине {state.products.length} позиции</h2>
            </div>
        </div>
    )
}

export default CountProduct;