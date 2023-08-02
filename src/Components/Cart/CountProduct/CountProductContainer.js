import React from "react";
import {connect} from "react-redux";
import CountProduct from "./CountProduct";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const CountProductContainer = connect(mapStateToProps, mapDispatchToProps) (CountProduct);

export default CountProductContainer;