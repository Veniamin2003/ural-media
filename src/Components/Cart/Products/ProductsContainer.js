import React from "react";
import {connect} from "react-redux";
import Products from "./Products";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps) (Products);

export default ProductsContainer;