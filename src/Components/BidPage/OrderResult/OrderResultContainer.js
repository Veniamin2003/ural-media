import React from "react";
import {connect} from "react-redux";
import OrderResult from "./OrderResult";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const OrderResultContainer = connect(mapStateToProps, mapDispatchToProps) (OrderResult);

export default OrderResultContainer;