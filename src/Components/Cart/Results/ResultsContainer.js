import React from "react";
import {connect} from "react-redux";
import Results from "./Results";
import {countTonnAC, updateResultAC} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateResult: () => {
            let action = updateResultAC();
            dispatch(action);
        },
        countTonn: () => {
            let action = countTonnAC();
            dispatch(action);
        },
    }
}

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps) (Results);

export default ResultsContainer;