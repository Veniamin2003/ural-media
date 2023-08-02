import React from "react";
import {connect} from "react-redux";
import DeliveryCart from "./DeliveryCart";
import {deleteDeliveryAC, updateResultAC} from "../../../redux/cart-reducer";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteDelivery: () => {
            let action = deleteDeliveryAC();
            dispatch(action);
        },
        updateResult: () => {
            let action = updateResultAC();
            dispatch(action);
        }
    }
}

function IsAvailable(props) {
    let state = props.cartPage;
    let isDeliveryConfirmed = state.isDeliveryConfirmed;
    if (isDeliveryConfirmed) {
        return <DeliveryCart city={state.currentDelivery.city} cost={state.currentDelivery.cost} deleteDelivery={props.deleteDelivery} updateResult={props.updateResult}/>
    }
}

const DeliveryCartContainer = connect(mapStateToProps, mapDispatchToProps) (IsAvailable);

export default DeliveryCartContainer;