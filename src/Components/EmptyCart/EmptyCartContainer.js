import React from "react";
import {connect} from "react-redux";
import EmptyCart from "./EmptyCart";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const EmptyCartContainer = connect(mapStateToProps, mapDispatchToProps) (EmptyCart);

export default EmptyCartContainer;