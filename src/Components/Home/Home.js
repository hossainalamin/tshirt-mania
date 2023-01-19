import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirtData = useLoaderData();
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {tshirtData.map(tshirt =><Tshirt key={tshirt._id} tshirts={tshirt}></Tshirt>)}
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;