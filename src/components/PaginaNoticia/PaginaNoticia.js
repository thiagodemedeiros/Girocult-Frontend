import React from 'react';
import './PaginaNoticia.css'
import PaginaNoticiaAgendaCulturalCard from './PaginaNoticiaAgendaCulturalCard/PaginaNoticiaAgendaCulturalCard.js'
import banner from './img/banner.png';
import arte from './img/menu/circulo-arte.png';
import cinema from './img/menu/circulo-cinema.png';
import danca from './img/menu/circulo-dança.png';
import literatura from './img/menu/circulo-literatura.png';
import musica from './img/menu/circulo-musica.png';
import turismo from './img/menu/circulo-turismo.png';
import publicidade from './img/publi.png'
import revista from './img/revista.png'
import setaEsquerda from './img/vetor/seta-esquerda.png'
import setaDireita from './img/vetor/seta-direita.png'
import BannerHeader from '../Itens/BannerHeader/BannerHeader';

const PaginaNoticia = () => {
    return (
        <>
            <BannerHeader imagem={banner}/>

            <section id='PaginaNoticia-menu-noticias' className='PaginaNoticia-menu-noticias'>
                <ul>
                    <li><img src={arte}></img>Arte</li>
                    <li><img src={cinema}></img>Cinema</li>
                    <li><img src={danca}></img>Dança</li>
                    <li><img src={literatura}></img>Literatura</li>
                    <li><img src={musica}></img>Música</li>
                    <li><img src={turismo}></img>Turismo</li>
                </ul>
            </section>

            <section className='PaginaNoticia-container'>
                <div className='PaginaNoticia-agenda-cultural'>
                        <h1>Agenda Cultural</h1>
                        <div className='PaginaNoticia-agenda-cultural-card-container'>
                            <PaginaNoticiaAgendaCulturalCard/>
                            <PaginaNoticiaAgendaCulturalCard/>
                            <PaginaNoticiaAgendaCulturalCard/>
                            <PaginaNoticiaAgendaCulturalCard/>
                            <PaginaNoticiaAgendaCulturalCard/>
                            <PaginaNoticiaAgendaCulturalCard/>
                        </div>
                        <div className='PaginaNoticia-agenda-cultural-seletor'>
                            <img src={setaEsquerda} className='PaginaNoticia-agenda-cultural-seletor-seta'></img>
                            <div className='PaginaNoticia-agenda-cultural-seletor-texto'>
                                <h5>Anterior</h5>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                                <h5>Próximo</h5>
                            </div>
                            <img src={setaDireita} className='PaginaNoticia-agenda-cultural-seletor-seta'></img>
                        </div>
                </div>

                <div className='PaginaNoticia-seja-parceiro'>
                    <div className='PaginaNoticia-seja-parceiro-titulo-texto'>
                        <h1>Seja um parceiro GIRO CULT</h1>
                        <h3>Apoie a cultura divulgando sua marca!</h3>
                    </div>
                    <div className='PaginaNoticia-seja-parceiro-revista-container'>
                        <div className='PaginaNoticia-seja-parceiro-revista'>
                            <h2>Publicidade</h2>
                            <img src={publicidade}></img>
                        </div>
                        <div className='PaginaNoticia-seja-parceiro-revista'>
                            <h2>Revista GIRO CULT</h2>
                            <img src={revista}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaginaNoticia;