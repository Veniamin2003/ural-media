import React from "react";
import {connect} from "react-redux";
import Products from "./Products";
import {
    countTonnAC, createCopyCitiesAC,
    deleteProductAC,
    updateCountAC,
    updateResultAC,
    updateSummaryAC
} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateCount: (count, id) => {
            let action = updateCountAC(count, id);
            dispatch(action);
        },
        updateSummary: (id) => {
            let action = updateSummaryAC(id);
            dispatch(action);
        },
        updateResult: () => {
            let action = updateResultAC();
            dispatch(action);
        },
        countTonn: () => {
            let action = countTonnAC();
            dispatch(action);
        },
        deleteProduct: (id) => {
            let action = deleteProductAC(id);
            dispatch(action);
        },
        createCopyCities: () => {
            let action = createCopyCitiesAC();
            dispatch(action);
        },
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps) (Products);

export default ProductsContainer;