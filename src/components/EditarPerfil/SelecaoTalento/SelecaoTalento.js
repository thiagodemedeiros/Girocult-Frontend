import React from 'react';
import './SelecaoTalento.css';

const SelecaoTalento = () => {
    return (
        <>
            <section className='SelecaoTalento'>
                <h3>Qual o seu talento?</h3>

                <div className='SelecaoTalento-container'>
                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Ator(a)</h4>
                    </div>

                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Escultor(a)</h4>
                    </div>

                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Escritor(a)</h4>
                    </div>

                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Fotógrafo(a)</h4>
                    </div>

                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Musicista</h4>
                    </div>

                    <div className='SelecaoTalento-checkbox'>
                        <input type='checkbox'></input>
                        <h4>Pintor(a)</h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SelecaoTalento;