import React from 'react';
import './Input30.css';

const Input30 = ({texto,id,placeholder}) => {
    return (
        <>
            <section className='input30'>
                <h3>{texto}</h3>
                <input type="text" id={id} name={id} placeholder={placeholder}></input>
            </section>
        </>
    );
};

export default Input30;