import React from "react";
import {connect} from "react-redux";
import Company from "./Company";
import {clearCartAC, deleteDeliveryAC} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => {
            let action = clearCartAC();
            dispatch(action);
        }
    }
}

const CompanyContainer = connect(mapStateToProps, mapDispatchToProps) (Company);

export default CompanyContainer;