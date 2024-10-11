import React from 'react';
import './IndicacaoProjeto.css'
import InputPopup from '../components/InputPopup/InputPopup';

const IndicacaoProjeto = () => {
    return (
        <>
            <section className='IndicacaoProjeto-container'>
                <div className='IndicacaoProjeto-popup'>
                    <div className='IndicacaoProjeto-popup-itens'>
                        <div className='IndicacaoProjeto-close-button'>
                            <button>X</button>
                        </div>
                        <h1>Indicação CULT</h1>
                        <h3>As indicações dos nossos artistas ampliam as chances
                        de promover a arte e cultura no nosso País, além de 
                        gerar autoridade, fazendo com que você artista possa 
                        viver da sua arte, indique-nos para algum produtor cultural
                        empresas para que a sua arte consiga rodar o Brasil e o mundo.
                        </h3>
                        <div className='IndicacaoProjeto-popup-input'>
                            <InputPopup id='nome' placeholder='Nome'/>
                            <InputPopup id='email' placeholder='E-mail'/>
                            <InputPopup id='telefone' placeholder='Telefone'/>
                            <InputPopup id='atuacao' placeholder='Atuação'/>
                        </div>
                        <button className='IndicacaoProjeto-popup-itens-button-indicar'>Indicar</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndicacaoProjeto;