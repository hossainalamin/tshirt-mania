import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirtData = useLoaderData();
    const [cart, setCart] = useState([]);
    const addToCart = (tshirt)=>{
        const exist = cart.find(fs=> fs._id === tshirt._id);
        if(exist){
            alert('Product already added to cart');
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart);
        }
      
        
    }
    const removeCartItem = (tshirt) =>{
        const remaining = cart.filter(ts=> ts._id !== tshirt._id);
        setCart(remaining);

    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {tshirtData.map(tshirt =><Tshirt key={tshirt._id} tshirts={tshirt} addToCart = {addToCart}></Tshirt>)}
            </div>
            <div className='cart-container'>
                <Cart 
                cart = {cart} 
                removeCartItem={removeCartItem}></Cart>
            </div>
        </div>
    );
};

export default Home;