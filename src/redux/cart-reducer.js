import React from 'react'

const CLEAR_CART = 'CLEAR_CART';

const UPDATE_COUNT = 'UPDATE_COUNT';
const UPDATE_SUMMARY = 'UPDATE_SUMMARY';
const UPDATE_RESULT = 'UPDATE_RESULT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const COUNT_TONN = 'COUNT_TONN';

const CHANGE_DELIVERY_BLOCK = 'CHANGE_DELIVERY_BLOCK';
const UPDATE_CURRENT_DELIVERY = 'UPDATE_CURRENT_DELIVERY';
const CONFIRM_DELIVERY = 'CONFIRM_DELIVERY';
const DELETE_DELIVERY = 'DELETE_DELIVERY';

const ADDRESS_CHANGE = 'ADDRESS_CHANGE';
const FULL_NAME_CHANGE = 'FULL_NAME_CHANGE';
const PHONE_CHANGE = 'PHONE_CHANGE';

const CHANGE_PICKUP_STATUS = 'CHANGE_PICKUP_STATUS';
const CHANGE_TRAIN_STATUS = 'CHANGE_TRAIN_STATUS';
const CHANGE_CAR_STATUS = 'CHANGE_CAR_STATUS';

const CHANGE_DEL_TYPE = 'CHANGE_DEL_TYPE';

let initialState = {
    totalCost: 0,
    totalVat: 101550,
    totalDiscount: 1607338,
    totalCountTonn: 0,
    currency: "RUB",
    currentDeliveryType: "Самовывоз",
    currentDelivery: {
        city: "",
        cost: 0
    },
    products: [
        {
            id: 1,
            name: "UMC 800 1*32 Однорядная",
            count: 10,
            measure: "т",
            price: 110790,
            priceWithoutVat: 98587,
            summary: 0,
        },
        {
            id: 2,
            name: "Натяжитель ленты ГОСТ 380-2005",
            count: 4,
            measure: "т",
            price: 2222,
            priceWithoutVat: 98587,
            summary: 0,
        },
        {
            id: 3,
            name: "UMC 970HE 0.63*19 Многорядная",
            count: 5,
            measure: "т",
            price: 1995,
            priceWithoutVat: 1805,
            summary: 0,
        }
    ],

    isDeliveryBlockActive: false,
    isDeliveryConfirmed: false,

    isDeliveryPickupActive: true,//самовывоз
    isDeliveryTrainActive: false, //жд
    isDeliveryCarActive: false, //машиной

    deliveryPickupName: "Самовывоз",
    deliveryTrainName: "Доставка по адресу с помощью ж/д",
    deliveryCarName: "Доставка по адресу машиной",

    temporaryDelivery: {
        city: "",
        cost: 0
    },
    deliveryCities: [
        { id: 1, city: "Челябинск", cost: 50000 },
        { id: 2, city: "Магнитогорск", cost: 25000 },
        { id: 3, city: "Пермь", cost: 65000},
    ],

    clientData: {
        fullName: "Иванов Иван Иванович",
        address: "7414003633",
        phone: "+7 (586) 682-78-15"
    },
    companyName: "Компания: ООО “Аверс”",
    companyAddress: "обл. Свердловская, г. Екатеринбург"
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CART:
            let emptyCart = []
            return {
                ...state,
                products: [...emptyCart]
            }

        case UPDATE_COUNT:
            let newArr = state.products.map(item => item.id === action.id
                        ? {...item, count: +action.newCount, summary: +action.newCount * item.price}
                        : item
            )
            return {
                ...state,
                products: [...newArr]
            }

        case COUNT_TONN:
            let countTonn = 0;
            for(let product of state.products){
                countTonn += product.count;
            }
            return {
                ...state,
                totalCountTonn: countTonn
            }

        case UPDATE_SUMMARY:
            let newArrSum = state.products.map(item => item.id === action.id
                ? {...item, summary: item.count * item.price}
                : item
            )

            return {
                ...state,
                products: [...newArrSum]
            }

        case UPDATE_RESULT:
            let delivery = state.currentDelivery.cost;
            let resultSum = 0;
            for(let product of state.products){
                resultSum += product.summary;
            }

            let totalDiscount = resultSum / 100 * 15;
            let totalVat = Math.ceil(resultSum - totalDiscount) * 0.20;
            let totalCost = Math.ceil(resultSum - totalDiscount + totalVat);


            return {
                ...state,
                totalCost: totalCost + delivery,
                totalDiscount: Math.ceil(totalDiscount),
                totalVat: Math.ceil(totalVat)
            }

        case DELETE_PRODUCT:
            let temp = state.products.filter(el => el.id !== action.id);
            return {
                ...state,
                products: [...temp]
            }

        case CHANGE_DELIVERY_BLOCK:
            let emptyArr2 = {
                city: "",
                cost: 0
            }
            return {
                ...state,
                isDeliveryBlockActive: action.value,
                temporaryDelivery: emptyArr2
            }

        case UPDATE_CURRENT_DELIVERY:
            let arr =  state.deliveryCities.filter(item => item.id === +action.id );
            let result = arr.map((el) => ({ city: el.city, cost: el.cost })).pop();
            const obj = Object.assign({}, result);

            return {
                ...state,
                temporaryDelivery: obj
            }

        case CONFIRM_DELIVERY:
            return {
                ...state,
                isDeliveryConfirmed: true,
                isDeliveryBlockActive: false,
                currentDelivery: state.temporaryDelivery
            }

        case DELETE_DELIVERY:
            let emptyArr = {
                city: "",
                cost: 0
            }
            return {
                ...state,
                isDeliveryConfirmed: false,
                isDeliveryBlockActive: false,
                currentDelivery: emptyArr,
                temporaryDelivery: emptyArr
            }

        case ADDRESS_CHANGE:
            let tempAddress = {
                fullName: state.clientData.fullName,
                address: action.address,
                phone: state.clientData.phone
            }
            return {
                ...state,
                clientData: tempAddress
            }

        case FULL_NAME_CHANGE:
            let tempFullName = {
                fullName: action.fullName,
                address: state.clientData.address,
                phone: state.clientData.phone
            }
            return {
                ...state,
                clientData: tempFullName
            }
        case PHONE_CHANGE:
            let tempPhone = {
                fullName: state.clientData.fullName,
                address: state.clientData.address,
                phone: action.phone
            }
            return {
                ...state,
                clientData: tempPhone
            }

        case CHANGE_PICKUP_STATUS:
            return {
                ...state,
                isDeliveryPickupActive: true,
                isDeliveryTrainActive: false,
            }
        case CHANGE_TRAIN_STATUS:
            return {
                ...state,
                isDeliveryTrainActive: true,
                isDeliveryPickupActive: false,
            }

        case CHANGE_CAR_STATUS:
            return {
                ...state,
                isDeliveryCarActive: true,
                isDeliveryTrainActive: false,
                isDeliveryPickupActive: false,

            }

        case CHANGE_DEL_TYPE:
            return {
                ...state,
                currentDeliveryType: action.typeDel
            }

        default:
            return state;
    }
}
export const  clearCartAC = () => ({type: CLEAR_CART});

export const  updateCountAC = (count, id) => ({type: UPDATE_COUNT, newCount: count, id: id});
export const  updateSummaryAC = (id) => ({type: UPDATE_SUMMARY, id: id});
export const  updateResultAC = () => ({type: UPDATE_RESULT});
export const  countTonnAC = () => ({type: COUNT_TONN});
export const  deleteProductAC = (id) => ({type: DELETE_PRODUCT, id: id});

export const  changeDeliveryBlockAC = (value) => ({type: CHANGE_DELIVERY_BLOCK, value: value});
export const  updateCurrentDeliveryAC = (id) => ({type: UPDATE_CURRENT_DELIVERY, id: id});
export const  deliveryConfirmAC = () => ({type: CONFIRM_DELIVERY});
export const  deleteDeliveryAC = () => ({type: DELETE_DELIVERY});

export const  addressChangeAC = (address) => ({type: ADDRESS_CHANGE, address: address});
export const  fullNameChangeAC = (fullName) => ({type: FULL_NAME_CHANGE, fullName: fullName});
export const  phoneChangeAC = (phone) => ({type: PHONE_CHANGE, phone: phone});

export const  changePickupStatusAC = (state) => ({type: CHANGE_PICKUP_STATUS, state: state});
export const  changeTrainStatusAC = (state) => ({type: CHANGE_TRAIN_STATUS, state: state});
export const  changeCarStatusAC = (state) => ({type: CHANGE_CAR_STATUS, state: state});

export const  typeDelChangedAC = (typeDel) => ({type: CHANGE_DEL_TYPE, typeDel: typeDel});

export default cartReducer;