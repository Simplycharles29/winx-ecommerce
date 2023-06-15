import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    let navigate = useNavigate()

    const globalState = useContext(CartContext)
    const state = globalState.state
    const dispatch = globalState.dispatch


    const total = state.reduce((total, item) => {
        return(total+item.price * item.quantity)
    }, 0)
    console.log(state)

    
  return (
    <div className='cart-page'>
            <div className="cart-container">
                <h1>Order Summary</h1>
        
            <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.map(item =>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td className='table-flex'>
                                    <span onClick={() => dispatch({type: 'INCREASE', payload: item})}>+</span>
                                        <p>{item.quantity}</p>
                                    <span onClick={() =>{ 
                                    if(item.quantity > 1){
                                        dispatch({type: 'DECREASE', payload: item})
                                    }else{
                                        dispatch({type: 'REMOVE', payload: item})
                                    }
                                }
                                }>-</span>
                                    </td>
                                    <td className='table-button'><button onClick={() => dispatch({type: 'REMOVE', payload: item})}>remove</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                        {
                    state.length > 0 && <div className="total">
                        <tr className='order-total'>order total:</tr>
                        <tr className='total-value'>{total}</tr>
                    </div>
        }
        </tr>
                    </tfoot>
                 </table>

                <div className="cart-button">
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                    <button onClick={() => navigate('/checkout-session')}>Proceed to Checkout</button>
                </div>
            </div>
    </div>
  )
}

export default Cart
