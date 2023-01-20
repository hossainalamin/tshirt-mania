import React from 'react';
import './Cart.css';
const Cart = ({cart, removeCartItem}) => {
    let message
    if(cart.length === 0){
        message = <p>Please Buy any item</p>
    }else{
        message = <p>Thank you for shopping with us</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : 'green'}>Order Summery </h2>
            <h4 className={`bold ${cart.length !== 0 ? 'orange' : 'green'}`}>Order count : {cart.length}</h4>
            {cart.map(ts=><p>{ts.name}<button onClick={() => removeCartItem(ts)}>X</button></p>)}
            {message}
            {
                cart.length === 2 ? <p>Do you want to buy more?</p> : <p>Buy more</p>
            }
            {
                cart.length === 3 && <p>You bought already three items</p>
            }
            {
                cart.length !==2 || <p>Please bou only two items</p>
            }
        </div>
    );
};

export default Cart;

// Conditional rendaring
// 1.Element variable
// 2.tarnary operator
// 3.&&(if true then execute)
// 4.|| (if false then execute)