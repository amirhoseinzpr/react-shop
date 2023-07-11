import React ,{useReducer , createContext}from 'react';

const initialState = {
    selectedItem : [],
    itemsCounter : 0 ,
    total : 0,
    checkout : false
}

const sumItem = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity , 0)
    const total = items.reduce((total,product) => total + product.price * product.quantity , 0).toFixed(2)
    return {itemsCounter , total}
}


const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM" : 
        if(!state.selectedItem.find(item => item.id === action.payload.id)){
            state.selectedItem.push({
                ...action.payload,
                quantity : 1
            })
        }
        return {
            ...state,
            selectedItem : [...state.selectedItem],
            ...sumItem(state.selectedItem)
        }
        case "REMOVE_ITEM" : 
        const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            selectedItem : [...newSelectedItem],
            ...sumItem(newSelectedItem)

        }
        case "INCREASE" :
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexI].quantity++;
            return{
                ...state,
            ...sumItem(state.selectedItem)

            }
        case "DECREASE" :
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexD].quantity--;
            return{
                ...state,
            ...sumItem(state.selectedItem)

            }
        case "CHECKOUT" :
            return{
                selectedItem : [],
                itemsCounter : 0 ,
                total : 0,
                checkout : true
            }
        case "CLEAR" :
            return{
                selectedItem : [],
                itemsCounter : 0 ,
                total : 0,
                checkout : false
            }
        default:
            return state;
    }
}
export const CartContexct = createContext();

const CratContextProvider = ({children}) => {
const [state,dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContexct.Provider value={{state, dispatch}}>
            {children}
        </CartContexct.Provider>
    );
};

export default CratContextProvider;