import React from "react";
import {connect} from "react-redux";
import Delivery from "./Delivery";
import {
    deliveryConfirmAC,
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
        }
    }
}

function IsDeliveryActive(props) {
    let state = props.cartPage;
    if (state.isDeliveryBlockActive) return <Delivery state={state} updateCurrentDelivery={props.updateCurrentDelivery}
                                                      onDeliveryConfirm={props.onDeliveryConfirm} updateResult={props.updateResult}/>
}

const DeliveryContainer = connect(mapStateToProps, mapDispatchToProps) (IsDeliveryActive);

export default DeliveryContainer;