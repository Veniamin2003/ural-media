import React, {useEffect} from 'react'
import s from "./Results.module.scss"

function Results(props) {
    let state = props.cartPage;

    useEffect(() => {
        props.updateResult();
        props.countTonn();
    }, [])

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let totalCost = numberWithSpaces(state.totalCost);
    let totalDiscount = numberWithSpaces(state.totalDiscount);
    let totalVat = numberWithSpaces(state.totalVat);

    return (
        <div className={s.results_container}>
            <div className={s.all_price}>ИТОГО: {totalCost} ₽</div>
            <div className={s.discount}>Скидка: {totalDiscount} ₽</div>
            <div className={s.vat}>В том числе НДС: {totalVat} ₽</div>
        </div>
    )
}

export default Results;