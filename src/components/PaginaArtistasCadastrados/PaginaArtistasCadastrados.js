import React from 'react';
import banner from './img/banner.png';
import './PaginaArtistasCadastrados.css'
import CardArtistasCadastrados from './CardArtistasCadastrados/CardArtistasCadastrados.js';
import BannerHeader from '../Itens/BannerHeader/BannerHeader';
import MenuUsuario from '../Itens/MenuUsuario/MenuUsuario';

const PaginaArtistaCadastrados = () => {
    return (
        <>
                <BannerHeader imagem={banner}/>

                <section className='button'>
                    <h3>Olá, Fulano de Tal</h3>
                    <div className='button-anuncio'>
                        <button>Sair</button>
                        <button>Minha Conta</button>
                    </div>
                </section>

            <body>

                <MenuUsuario/>

                <section className='section-artista'>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                    <CardArtistasCadastrados/>
                </section>

            </body>
        </>
    );
};

export default PaginaArtistaCadastrados;