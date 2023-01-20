import React from 'react';

const Cart = ({cart, removeCartItem}) => {
    return (
        <div>
            <h2>Order Summery </h2>
            <h4>Order count : {cart.length}</h4>
            {cart.map(ts=><p>{ts.name}<button onClick={() => removeCartItem(ts)}>X</button></p>)}
        </div>
    );
};

export default Cart;