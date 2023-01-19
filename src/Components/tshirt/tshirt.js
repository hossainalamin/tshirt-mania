import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirts}) => {
    const {id, picture,name,price} = tshirts;
    return (
        <div className='tshirt'>
            <img src={picture}></img>
            <h2>{name}</h2>
            <h4>Price:{price}</h4>
            <button>Order Now</button>

        </div>
    );
};

export default Tshirt;