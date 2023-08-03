import React from "react";
import {connect} from "react-redux";
import {
    addressChangeAC,
    changeCarStatusAC,
    changePickupStatusAC,
    changeTrainStatusAC, deleteDeliveryAC, deliveryConfirmAC,
    typeDelChangedAC,
    updateCurrentDeliveryAC,
} from "../../../../redux/cart-reducer";
import DeliveryTModal from "./DeliveryTModal";

let mapStateToProps = (state) => {

    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changePickupStatus: (state) => {
            let action = changePickupStatusAC(state);
            dispatch(action);
        },
        changeTrainStatus: (state) => {
            let action = changeTrainStatusAC(state);
            dispatch(action);
        },
        changeCarStatus: (state) => {
            let action = changeCarStatusAC(state);
            dispatch(action);
        },
        typeDelChanged: (type) => {
            let action = typeDelChangedAC(type);
            dispatch(action);
        },
        updateCurrentDelivery: (type) => {
            let action = updateCurrentDeliveryAC(type);
            dispatch(action);
        },
        onDeliveryConfirm: () => {
            let action = deliveryConfirmAC();
            dispatch(action);
        },
        deleteDelivery: () => {
            let action = deleteDeliveryAC();
            dispatch(action);
        },

    }
}

const DeliveryTModalContainer = connect(mapStateToProps, mapDispatchToProps) (DeliveryTModal);

export default DeliveryTModalContainer;