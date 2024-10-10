import React from 'react';
import banner from './img/banner.png';
import imagem1 from './img/img-side.png';
import './AnunciarAgora.css'

const AnunciarAgora = () => {
    return (
        <>
            <section className='section-anuncio'>
                <div class="container-banner-anuncio">
                    <img src={banner} alt=""></img>
                </div>
            </section>

            <section className='section-anuncio-button-conta'>
                <h3>Olá, Fulano de Tal</h3>
                <div className='button-anuncio'>
                    <button>Sair</button>
                    <button>Minha Conta</button>
                </div>
            </section>

            <section className='section-anuncio'>
                <div class="container-anuncio">
                    <div class="texto">
                        <h1>Amplie sua marca com o Giro CULT, o portal que conecta você a um público engajado e apaixonado por arte e cultura.</h1>
                        <p>Ao anunciar conosco, sua empresa ganha visibilidade em um ambiente onde criatividade e inovação são valorizadas. Oferecemos alcance segmentado, garantindo que sua mensagem chegue diretamente ao seu público-alvo. Aproveite a oportunidade de destacar sua marca em um espaço influente e colha os benefícios de um retorno expressivo e qualificado.</p>
                        <button>Anunciar agora!</button>
                    </div>
                        <img src={imagem1} alt=""></img>
                </div>
            </section>
        </>
    );
};

export default AnunciarAgora;
