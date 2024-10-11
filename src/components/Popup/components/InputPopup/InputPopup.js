import React from 'react';
import './InputPopup.css';

const InputPopup = ({id,placeholder}) => {
    return (
        <>
            <section className='InputPopup'>
                <input type="text" id={id} name={id} placeholder={placeholder}></input>
            </section>
        </>
    );
};

export default InputPopup;