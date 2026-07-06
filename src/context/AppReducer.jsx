import { act } from "react"

const AppReducer = (state, action) => {
    if(action.type === "ADD_TRANSACTION"){
        return {
            ...state,
            transactions: [...state.transactions, action.payload]
        }
    } else if(action.type === "DELETE_TRANSACTION"){
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
    } else if(action.type === "GET_TRANSACTIONS"){
        return {
            ...state,
            transactions:  action.payload,
            loading: false
        }
    } else if(action.type === "TRANSACTION_ERROR"){
        return {
            ...state,
            error: action.payload
        }
    } else{
        return {
            ...state
        }
    }
}

export default AppReducer