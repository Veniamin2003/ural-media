import React from "react";
import {connect} from "react-redux";
import DeliveryCart from "./DeliveryCart";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

function IsAvailable(props) {
    let state = props.cartPage;
    const deliveryCity = state.currentDelivery.city;
    if (deliveryCity !== "") {
        return <DeliveryCart city={state.currentDelivery.city} cost={state.currentDelivery.cost}/>
    }
}

const DeliveryCartContainer = connect(mapStateToProps, mapDispatchToProps) (IsAvailable);

export default DeliveryCartContainer;