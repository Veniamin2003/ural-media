import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";
import EmptyCartContainer from "../EmptyCart/EmptyCartContainer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

function IsCartNotEmpty(props) {
    let state = props.cartPage;
    if (state.products.length > 0) {
        return <Cart />
    } else {
        return <EmptyCartContainer />
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps) (IsCartNotEmpty);

export default CartContainer;