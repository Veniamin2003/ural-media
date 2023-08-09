import React from "react";
import {connect} from "react-redux";
import Select from "./Select";
import {addressChangeAC, updateCurrentDeliveryAC, updateSearchQueryAC} from "../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentDelivery: (id) => {
            let action = updateCurrentDeliveryAC(id);
            dispatch(action);
        },
        updateSearchQuery: (searchQuery) => {
            let action = updateSearchQueryAC(searchQuery);
            dispatch(action);
        },
    }
}

const SelectContainer = connect(mapStateToProps, mapDispatchToProps) (Select);

export default SelectContainer;