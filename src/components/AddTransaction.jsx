import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from "react-toastify";

const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false)

    const { addTransaction } = useContext(GlobalContext)

    const submitForm = async (e) => {
        e.preventDefault()

        if(loading) return;

        try {
            setLoading(true)

            await addTransaction({
                text,
                amount: Number(amount)
            })
        
        setText("")
        setAmount("")
        toast.success("Transaction Added Successfully")
        } catch(error) {
            toast.error("Something went wrong")
        } finally {
        setLoading(false)
        }
        
        
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." required />
                </div>
                <button className="btn" disabled={loading}>
                    { loading ? "Adding..." : "Add transaction" }
                </button>
            </form>
        </>
    )
}

export default AddTransaction