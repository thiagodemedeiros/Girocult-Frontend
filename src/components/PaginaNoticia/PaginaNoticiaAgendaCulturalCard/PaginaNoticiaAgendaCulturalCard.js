import React from 'react';
import './PaginaNoticiaAgendaCulturalCard.css'
import agenda from './img/agenda-cultural.png'

const PaginaNoticiaAgendaCulturalCard = () => {
    return (
        <>
            <div className='PaginaNoticia-agenda-cultural-card'>
                <img src={agenda}></img>
                <div className='PaginaNoticia-agenda-cultural-card-texto'>
                    <h3>3 Maneiras de Tocar no Assunto</h3>
                    <h5>Lucas Bahia | 15 de maior de 2024</h5>
                    <h4>O espetáculo premiado, “3 Maneiras de Tocar no Assunto”,
                    sobre a luta contra a homofobia, faz apresentações gratuitas de abril</h4>
                </div>
            </div>
        </>
    );
};

export default PaginaNoticiaAgendaCulturalCard;