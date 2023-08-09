import React from "react";
import {connect} from "react-redux";
import Delivery from "./Delivery";
import {
    changeTrainStatusAC, createCopyCitiesAC,
    deliveryConfirmAC, typeDelChangedAC,
    updateCurrentDeliveryAC,
    updateResultAC
} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentDelivery: (id) => {
            let action = updateCurrentDeliveryAC(id);
            dispatch(action);
        },
        onDeliveryConfirm: () => {
            let action = deliveryConfirmAC();
            dispatch(action);
        },
        updateResult: () => {
            let action = updateResultAC();
            dispatch(action);
        },
        typeDelChanged: (type) => {
            let action = typeDelChangedAC(type);
            dispatch(action);
        },
        changeTrainStatus: (state) => {
            let action = changeTrainStatusAC(state);
            dispatch(action);
        },
        createCopyCities: () => {
            let action = createCopyCitiesAC();
            dispatch(action);
        },
    }
}

function IsDeliveryActive(props) {
    let state = props.cartPage;
    if (state.isDeliveryBlockActive) return <Delivery state={state} updateCurrentDelivery={props.updateCurrentDelivery}
                                                      onDeliveryConfirm={props.onDeliveryConfirm} updateResult={props.updateResult}
                                                      typeDelChanged={props.typeDelChanged} changeTrainStatus={props.changeTrainStatus} createCopyCities={props.createCopyCities}
    />
}

const DeliveryContainer = connect(mapStateToProps, mapDispatchToProps) (IsDeliveryActive);

export default DeliveryContainer;