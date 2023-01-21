import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const houseContext = createContext('1');
export const moneyContext = createContext('100');
const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(1)
    return (
        <houseContext.Provider value={[house,setHouse]}>
            <moneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
        </moneyContext.Provider>
        </houseContext.Provider>
    );
};

export default Grandpa;
/*Context api
1.Create context api
2.set the provider
3.use context
*/