import React, {useState} from "react"
import s from "./PickupType.module.scss"
import {AiFillCheckCircle} from "react-icons/ai";

const PickupType = ( props ) => {
    let state = props.state;
    let pickupActive = state.isDeliveryPickupActive;

    let onChangePickupStatus = () => {
         props.changePickupStatus();
         props.typeDelChanged(state.deliveryPickupName);
    }

    return (
        <div className={pickupActive ? s.pickup_block__active : s.pickup_block} onClick={onChangePickupStatus}>
            <div className={s.pickup_block__content}>
                <p>Самовывоз</p>
                <div className={s.check_mark}>
                    <AiFillCheckCircle/>
                </div>
            </div>
        </div>
    )
}

export default PickupType;