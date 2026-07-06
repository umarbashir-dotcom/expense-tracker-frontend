import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const getTransactions = async () => {
        try {
            const res = await axios.get(API_URL)
            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
        }
    }

    const addTransaction = async (transaction) => {
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        try{
            const res = await axios.post(API_URL, transaction, config)
            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data.data
            })
        } catch(error){
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
        }
    }

    const deleteTransaction = async (id) => {
        try{
            await axios.delete(`${API_URL}/${id}`)

            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        } catch(error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
        }
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
        <ToastContainer />
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }