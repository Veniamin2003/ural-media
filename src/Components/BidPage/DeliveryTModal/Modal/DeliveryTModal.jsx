import React, {useState} from "react"
import "./DeliveryTModal.css"
import s from "../PickupType/PickupType.module.scss"
import {AiOutlineClose} from "react-icons/ai";
import {AiFillCheckCircle} from "react-icons/ai";
import PickupType from "../PickupType/PickupType";
import TrainType from "../TrainType/TrainType";
import {changeCarStatusAC} from "../../../../redux/cart-reducer";

const DeliveryTModal = ( props ) => {
    let state = props.cartPage;

    let changePickupStatus = () => {
        props.changePickupStatus();
    }
    let changeTrainStatus = () => {
        props.changeTrainStatus();
    }
    let changeCarStatus = () => {
        props.changeCarStatus();
    }
    let typeDelChanged = (type) => {
        props.typeDelChanged(type);
    }
    let updateCurrentDelivery = (id) => {
        props.updateCurrentDelivery(id);
    }
    let onDeliveryConfirm = () => {
        props.onDeliveryConfirm();
    }
    let deleteDelivery = () => {
        props.deleteDelivery();
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="close">
                    <AiOutlineClose onClick={() => props.setActive(false)}/>
                </div>
                <div className="header">
                    <h3>Выберите способ получения</h3>
                </div>

                <PickupType state={state} changePickupStatus={changePickupStatus}
                            typeDelChanged={typeDelChanged}
                />

                <TrainType state={state}
                           setActive={props.setActive}
                           changeTrainStatus={changeTrainStatus}
                           typeDelChanged={typeDelChanged}
                           changeCarStatus={changeCarStatus}
                           updateCurrentDelivery={updateCurrentDelivery}
                           onDeliveryConfirm={onDeliveryConfirm}
                           deleteDelivery={deleteDelivery}
                />
            </div>
        </div>
    )
}

export default DeliveryTModal;