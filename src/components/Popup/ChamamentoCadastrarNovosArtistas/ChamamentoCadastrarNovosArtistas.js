import React from 'react';
import './ChamamentoCadastrarNovosArtistas.css'
import imagem from './img/side.png'

const ChamamentoCadastrarNovosArtistas = () => {
    return (
        <>
            <section className='ChamamentoCadastrarNovosArtistas-container'>
                <h1>Seja um artista CULT</h1>
                <h3>As indicações dos nossos artistas ampliam as chances
                de promover a arte e cultura no nosso País, além de 
                gerar autoridade, fazendo com que você artista possa 
                viver da sua arte, indique-nos para algum produtor cultural
                empresas para que a sua arte consiga rodar o Brasil e o mundo.
                </h3>
                <img src= {imagem}></img>
            </section>
        </>
    );
};

export default ChamamentoCadastrarNovosArtistas;