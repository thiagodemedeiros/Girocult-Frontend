import React from 'react';
import './Input50.css';

const Input50 = ({texto,id,placeholder}) => {
    return (
        <>
            <section className='input50'>
                <h3>{texto}</h3>
                <input type="text" id={id} name={id} placeholder={placeholder}></input>
            </section>
        </>
    );
};

export default Input50;