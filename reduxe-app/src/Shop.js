import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreator, actionCreators } from './state';
import { useSelector } from 'react-redux'



function Shop() {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='my-3'>
        <h2>Deposite/Withdraw Money</h2>
        {/* <button type="button" className="btn btn-primary mx-2" onClick={ ()=> {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update balance
        <button type="button" className="btn btn-primary mx-2" onClick={ ()=> {dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
         <button type="button" className="btn btn-primary mx-2" onClick={ ()=> {dispatch(withdrawMoney(100))}}>-</button>
        Update balance {balance}
        <button type="button" className="btn btn-primary mx-2" onClick={ ()=> {dispatch(depositeMoney(100))}}>+</button>
    </div>
  )
}

export default Shop