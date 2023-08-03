import React from "react";
import {connect} from "react-redux";
import ClientData from "./ClientData";
import {
    addressChangeAC,
    fullNameChangeAC,
    phoneChangeAC
} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addressChange: (address) => {
            let action = addressChangeAC(address);
            dispatch(action);
        },
        fullNameChange: (fullName) => {
            let action = fullNameChangeAC(fullName);
            dispatch(action);
        },
        phoneChange: (phone) => {
            let action = phoneChangeAC(phone);
            dispatch(action);
        }
    }
}

const ClientDataContainer = connect(mapStateToProps, mapDispatchToProps) (ClientData);

export default ClientDataContainer;