import React, { useContext } from 'react';
import { houseContext } from '../Grandpa/Grandpa';
const Myself = () => {
    const[house,setHouse] = useContext(houseContext);
    return (
        <div>
            <h3>Myself</h3>
            <h4>House : {house}</h4>
            <button onClick={()=>setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Myself;