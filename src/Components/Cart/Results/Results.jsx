import React, {useEffect} from 'react'
import s from "./Results.module.scss"

function Results(props) {
    let state = props.cartPage;

    useEffect(() => {
        props.updateResult();
    }, [])

    return (
        <div className={s.results_container}>
            <div className={s.all_price}>ИТОГО: {state.totalCost} Р</div>
            <div className={s.discount}>Скидка: {state.totalDiscount} Р</div>
            <div className={s.vat}>В том числе НДС: 7668677 Р</div>
        </div>
    )
}

export default Results;