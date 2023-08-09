import React, {useEffect, useState} from 'react'
import s from "./Delivery.module.scss"
import * as events from "events";
import Select from "../../../UI/Select/Select";
import SelectContainer from "../../../UI/Select/SelectContainer";
//import "./Select.css"

function Delivery(props) {
    const [value, setValue] = useState('');
    let state = props.state;

    /*useEffect(() => {
        props.createCopyCities();
    }, [])*/

    let onValueChanged = (event) => {
        setValue(event.target.value);
        let currentDeliveryId = event.target.value;

        props.updateCurrentDelivery(currentDeliveryId);
    }
    let onDeliveryConfirm = () => {
        if(state.temporaryDelivery.city !== ""){
            props.onDeliveryConfirm();
            props.updateResult();
            props.typeDelChanged(state.deliveryTrainName);
            props.changeTrainStatus();
        }
        else {
            alert("Вам необходимо выбрать город")
        }

    }

    const options = state.deliveryCities.map(el => {
        return <option key={el.id} value={el.id}>{el.city}</option>;
    });

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let cost = numberWithSpaces(state.temporaryDelivery.cost);

    return (
        <div className={s.delivery_container}>
            <div className={s.city}>
                <div className={s.name_city}>Укажите город</div>
                <div>
                    {/*<select className={s.select} value={value} onChange={onValueChanged}>
                        <option value="" disabled selected hidden>Город</option>
                        {options}
                    </select>*/}

                    <div className={s.select_container}>
                        <SelectContainer state={state}/>
                    </div>
                </div>

            </div>
            <div className={s.price_elem}>
                <div className={s.price_text}>Стоимость</div>
                <div >
                    <div className={s.price}>{cost} ₽</div>
                </div>
            </div>
            <div className={s.btn_block}>
                <div className={s.btn_order}>
                    <button className="btn_red_empty" onClick={onDeliveryConfirm}>Подтвердить</button>
                </div>

            </div>
        </div>
    )
}

export default Delivery;