import React from 'react';
import banner from './img/image237.png';
import imagem1 from './img/image238.png';
import './SectionCadastro.css'

const SectionCadastro = () => {
    return (
        <>
            <section className='section-cadastro'>

            <section class="container-banner">
                <img src={banner} alt=""></img>
            </section>

            <section class="container-cadastro">
                <div class="texto">
                    <h1>Eleve sua <span class="texto-amarelo">Arte</span> ao Próximo Nível!</h1>
                    <p>Venha fazer parte do Portal GIRO CULT e compartilhe seu talento com o mundo! Convidamos artistas de todas as áreas: músicos, atores, dançarinos, pintores, escritores e muito mais,  a se cadastrarem gratuitamente em nossa plataforma. O Portal GIRO CULT é um espaço dedicado à promoção da arte e da cultura. Aqui você poderá divulgar seu trabalho, conectar-se com outros artistas e alcançar um público maior. Não perca essa oportunidade de fazer parte de uma comunidade criativa e inspiradora. Cadastre-se agora e faça parte do movimento cultural que mais cresce no Brasil e no Mundo.</p>
                    <button>Cadastre-se gratuitamente!</button>
                </div>
                    <img src={imagem1} alt=""></img>
            </section>

            </section>
        </>
    );
};

export default SectionCadastro;
