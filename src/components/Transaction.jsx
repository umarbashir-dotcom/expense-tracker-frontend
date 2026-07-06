import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from "react-toastify";
import numberWithCommas from "../utils/format.js"


const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-"
  const onDeleteClick = async () => {
    await deleteTransaction(transaction._id);
    toast.success("Transaction Deleted Successfully")
  }
  return (
    <>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button className="delete-btn" onClick={onDeleteClick}>x</button>
      </li>
    </>
  )
}

export default Transaction