import React from 'react';
import './ComponentCardSaibaMais.css'
import ButtonPretoBranco from '../../../Itens/ButtonPretoBranco/ButtonPretoBranco';

const ComponentCardSaibaMais = ({imagem}) => {
    return (
        <>
            <div className='ComponentCardSaibaMais'>
                <img src={imagem}></img>
                <div className='ComponentCardSaibaMais-Button'>
                    <ButtonPretoBranco texto={'Saiba mais'}/>
                </div>
            </div>
        </>
    );
};

export default ComponentCardSaibaMais;