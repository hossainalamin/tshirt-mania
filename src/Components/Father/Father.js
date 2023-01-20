import React from 'react';
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'

const Father = ({house}) => {
    return (
        <div>
            <h4>Father</h4>
            House : {house}
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
            </section>
        </div>
    );
};

export default Father;