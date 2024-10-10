import React from 'react';
import pnab from './img/pnab.png';
import './CardArtistasCadastrados.css'

const CardArtistaCadastrados = () => {
    return (
        <>
            <div class="card-artista">
                <img src={pnab}></img>
                <div className='texto-card-artista'>
                    <h1>Cadastro de artistas e fazedores de cultara Manaus</h1>
                    <div className='texto-card-artista-sobre'>
                        <h2>Sobre</h2>
                        <p>O presente instrumento tem o objetivo de cadastrar previamente os artistas e demais profissionais da cultura da cidade de Manaus, interessados em concorrer nos editais da Lei Política Nacional Aldir Blanc.<br></br>
                        Ressalta-se que este cadastro previo é obrigatório para a inscrição nos editais PNAB.<br></br>
                        Dúvidas sobre o cadastro:<br></br>
                        cadastropnabmanaus@gmail.com<br></br>
                        Dúvidas sobre a plataforma Prosas:<br></br>
                        suporte@prosas.com.br</p>
                    </div>
                    <div className='texto-card-artista-infos'>
                        <div>
                            <h2>Data</h2>
                            <p>Inscrições Continuas</p>
                        </div>
                        <div className='texto-card-artista-infos-valor'>
                            <h2>Valor</h2>
                            <p>R$1.000.000,00</p>
                        </div>
                        <div>
                            <h2>Patrocinador</h2>
                            <p>CULTURA MANAUS</p>
                        </div>
                    </div>
                </div>
                <div className='card-artista-button'>
                    <button>Ir ao Edital</button>
                    <button>Acessar PDF</button>
                </div>
            </div>
        </>
    );
};

export default CardArtistaCadastrados;