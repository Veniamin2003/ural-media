import React, {useState} from "react"
import s from "./TrainType.module.scss"
import {AiFillCheckCircle} from "react-icons/ai";
import {IoRadioButtonOn} from "react-icons/io5";
import {changeCarStatusAC} from "../../../../redux/cart-reducer";

const TrainType = ( props ) => {
    let state = props.state;

    const [value, setValue] = useState('');

    let onValueChanged = (event) => {
        setValue(event.target.value);
        let currentDeliveryId = event.target.value;

        props.updateCurrentDelivery(currentDeliveryId);
    }
    const options = state.deliveryCities.map(el => {
        return <option key={el.id} value={el.id}>{el.city}</option>;
    });

    let trainActive = state.isDeliveryTrainActive;

    let onChangeTrainStatus = () => {
        props.typeDelChanged(state.deliveryTrainName);
        props.changeTrainStatus();
    }

    let onTypeTrainChanged = (e) => {
        props.typeDelChanged(state.deliveryTrainName);
        props.changeTrainStatus();

    }
    let onTypeCarChanged = (e) => {
        props.typeDelChanged(state.deliveryCarName);
        //props.changeCarStatus()
    }

    let onDeliveryConfirm = () => {
        if(state.currentDeliveryType !== "Самовывоз"){
            if(state.temporaryDelivery.city !== ""){
                props.onDeliveryConfirm();
                props.setActive(false);
            }
            else {
                alert("Вам необходимо выбрать город")
            }
        } else {
            props.deleteDelivery();
            props.setActive(false);
        }

        //props.updateResult();
    }

    const trainTypeClass = (state.isDeliveryTrainActive ? s.train_block__choose_content : s.train_block__choose_disabled )

    return (
        <div className={s.train_block__container}>
            <div className={trainActive ? s.train_block__active : s.train_block} onClick={onChangeTrainStatus}>
                <div className={s.train_block__content}>
                    <p>Доставка по адресу</p>
                    <div className={s.check_mark}>
                        <AiFillCheckCircle/>
                    </div>
                </div>
            </div>
            <div className={s.train_block__choose}>
                <div className={trainTypeClass}>
                    <p>Укажите город:</p>
                    <div>
                        <select className={s.select} value={value} onChange={onValueChanged}>
                            <option value="" disabled hidden >{state.currentDelivery.city}</option>
                            {options}
                        </select>
                    </div>

                    <div>
                        <p>Выберите транспорт:</p>
                        <div className={s.radio_block}>
                            {/*<div>
                                <input
                                    type="radio"
                                    name="train"
                                    value={state.deliveryTrainName}
                                    onChange={onTypeDelChanged}
                                />
                                {state.deliveryTrainName}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="car"
                                    value={state.deliveryCarName}
                                    onChange={onTypeDelChanged2}
                                />
                                {state.deliveryCarName}
                            </div>*/}
                            <div className={s.radio}>
                                <IoRadioButtonOn className={s.icon_radio} onClick={onTypeTrainChanged}/>
                                <p>{state.deliveryTrainName}</p>
                            </div>
                            <div className={s.radio}>
                                <IoRadioButtonOn className={s.icon_radio} onClick={onTypeCarChanged}/>
                                <p>{state.deliveryCarName}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Стоимость:</p>
                        <p className={s.cost}>{state.temporaryDelivery.cost} ₽</p>
                    </div>
                </div>
                <button className="btn_blue_delivery" onClick={onDeliveryConfirm}>
                    Сохранить изменения
                </button>
            </div>
        </div>

    )
}

export default TrainType;