import React from 'react'

const UPDATE_COUNT = 'UPDATE_COUNT';
const UPDATE_SUMMARY = 'UPDATE_SUMMARY';
const UPDATE_RESULT = 'UPDATE_RESULT';

let initialState = {
    totalCost: 0,
    totalVat: 101550,
    totalDiscount: 1607338,
    currency: "RUB",
    currentDelivery: {
        city: "Челябинск",
        cost: 50000
    },
    products: [
        {
            id: 1,
            name: "Натяжитель ленты ГОСТ 380-2005",
            count: 10,
            measure: "т",
            price: 110790,
            priceWithoutVat: 98587,
            summary: 200801,
        },
        {
            id: 2,
            name: "Натяжитель ленты ГОСТ 380-2005",
            count: 4,
            measure: "т",
            price: 110790,
            priceWithoutVat: 98587,
            summary: 200801,
        }
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUNT:
            let newArr = state.products.map(item => item.id === action.id
                        ? {...item, count: +action.newCount, summary: +action.newCount * item.price}
                        : item
            )
            return {
                ...state,
                products: [...newArr]
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
            let resultSum = 0;
            debugger
            for(let product of state.products){
                resultSum += product.summary
            }

            let totalDiscount = resultSum / 100 * 15;
            let totalCost = resultSum - totalDiscount;

            return {
                ...state,
                totalCost: totalCost,
                totalDiscount: totalDiscount
            }

        default:
            return state;
    }
}

export const  updateCountAC = (count, id) => ({type: UPDATE_COUNT, newCount: count, id: id})
export const  updateSummaryAC = (id) => ({type: UPDATE_SUMMARY, id: id})
export const  updateResultAC = () => ({type: UPDATE_RESULT})

export default cartReducer;