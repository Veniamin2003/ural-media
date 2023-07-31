import {combineReducers, createStore} from 'redux'
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    cartPage: cartReducer
})

let store = createStore(reducers)

export default store