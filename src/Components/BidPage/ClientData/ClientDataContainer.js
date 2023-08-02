import React from "react";
import {connect} from "react-redux";
import ClientData from "./ClientData";
import {addressChangeAC, deleteProductAC} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addressChange: (address) => {
            debugger
            let action = addressChangeAC(address);
            dispatch(action);
        }
    }
}

const ClientDataContainer = connect(mapStateToProps, mapDispatchToProps) (ClientData);

export default ClientDataContainer;