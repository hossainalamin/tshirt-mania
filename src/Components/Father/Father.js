import React, { useContext } from 'react';
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import { moneyContext } from '../Grandpa/Grandpa';

const Father = ({house}) => {
    const [money,setMoney] = useContext(moneyContext);
    return (
        <div>
            <h4>Father</h4>
            <p>House : {house}</p>
            <p>Money : {money}</p>
            <button onClick={()=>setMoney(money+400)}>Increase</button>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
            </section>

        </div>
    );
};

export default Father;