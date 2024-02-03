import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreator }  from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  //const action = bindActionCreators(actionCreator,dispatch)
  const {withdrawmoney,depositeMoney} = bindActionCreators(actionCreator,dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <div>
        {/* <h2> Deposite/withdrawmoney </h2>
      <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreator.withdrawmoney(100))}> - </button>
       Update BankBalance
      <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreator.depositeMoney(100))}> + </button> */}
      
      {/* <h2> Deposite/withdrawmoney </h2>
      <button className="btn btn-primary mx-2" onClick={()=>{action.withdrawmoney(100)}}> - </button>
       Update BankBalance
      <button className="btn btn-primary mx-2" onClick={()=>{action.depositeMoney(100)}}> + </button> */}

<h2> Deposite/withdrawmoney </h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawmoney(100)}}> - </button>
       Update BankBalance({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}> + </button>
    </div>
  )
}

export default Shop
