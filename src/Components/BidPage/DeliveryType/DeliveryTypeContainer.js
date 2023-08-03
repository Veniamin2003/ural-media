import React from "react";
import {connect} from "react-redux";
import DeliveryType from "./DeliveryType";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /*phoneChange: (phone) => {
            let action = phoneChangeAC(phone);
            dispatch(action);
        }*/
    }
}

const DeliveryTypeContainer = connect(mapStateToProps, mapDispatchToProps) (DeliveryType);

export default DeliveryTypeContainer;