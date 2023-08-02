import React from "react";
import {connect} from "react-redux";
import Bid from "./Bid";

let mapStateToProps = (state) => {
    return {
        cartPage: state.cartPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const BidContainer = connect(mapStateToProps, mapDispatchToProps) (Bid);

export default BidContainer;