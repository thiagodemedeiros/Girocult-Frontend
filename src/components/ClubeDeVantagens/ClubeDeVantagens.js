import React from 'react';
import './ClubeDeVantagens.css'
import ButtonPerfilUsuario from '../Itens/ButtonPerfilUsuario/ButtonPerfilUsuario';
import banner from './img/banner.png'
import BannerHeader from '../Itens/BannerHeader/BannerHeader';
import CardsSaibaMais from './CardsSaibaMais/CardsSaibaMais';

const ClubeDeVantagens = () => {
    return (
        <>
            <BannerHeader imagem={banner}/>

            <ButtonPerfilUsuario/>
            <body>

                <section className='ClubeDeVantagens-container'>
                    <div className='ClubeDeVantagens-Texto-Principal'>
                        <h1>Não perca tempo e aproveite as ofertas e promoções do nosso clube de vantagens CULT</h1>
                        <h3>O Clube de Vantagens CULT é mais do que um simples programa de descontos—é uma oportunidade para melhorar sua rotina, aproveitando ao máximo o que a vida tem a oferecer.</h3>
                    </div>

                    <CardsSaibaMais/>
                </section>

            </body>
        </>
    );
};

export default ClubeDeVantagens;