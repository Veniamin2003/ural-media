import React from "react";
import {connect} from "react-redux";
import Delivery from "./Delivery";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const DeliveryContainer = connect(mapStateToProps, mapDispatchToProps) (Delivery);

export default DeliveryContainer;