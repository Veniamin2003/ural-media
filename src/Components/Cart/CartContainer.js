import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart);

export default CartContainer;