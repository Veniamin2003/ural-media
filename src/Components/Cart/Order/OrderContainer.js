import React from "react";
import {connect} from "react-redux";
import Order from "./Order";
import {changeDeliveryBlockAC, deleteDeliveryAC} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDeliveryBlock: (value) => {
            let action = changeDeliveryBlockAC(value);
            dispatch(action);
        },
        deleteDelivery: () => {
            let action = deleteDeliveryAC();
            dispatch(action);
        }
    }
}

const OrderContainer = connect(mapStateToProps, mapDispatchToProps) (Order);

export default OrderContainer;