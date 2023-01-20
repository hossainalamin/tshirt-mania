import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirts, addToCart}) => {
    const {picture,name,price} = tshirts;
    return (
        <div className='tshirt'>
            <img src={picture} alt=""></img>
            <h2>{name}</h2>
            <h4>Price:{price}</h4>
            <button onClick={()=>addToCart(tshirts)}>Order Now</button>

        </div>
    );
};

export default Tshirt;