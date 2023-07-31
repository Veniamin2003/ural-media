import React from 'react'

let initialState = {
    totalCost: 4952016,
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
            count: 42,
            measure: "т",
            price: 110790,
            priceWithoutVat: 98587,
            summary: 200801,
        },
        {
            id: 2,
            name: "Натяжитель ленты ГОСТ 380-2005",
            count: 42,
            measure: "т",
            price: 110790,
            priceWithoutVat: 98587,
            summary: 200801,
        }
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
       /* case UPDATE_TYPE:
            return {
                ...state,
                typeSum: action.price,
                selectedStairsTypesId: action.selectedId,
                stairTypeName: action.stairTypeName
            }*/

        default:
            return state;
    }
}

export default cartReducer;