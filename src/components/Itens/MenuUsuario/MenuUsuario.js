import React, { useState } from 'react';
import './MenuUsuario.css';

import ajuda from './img/vetores/ajuda.png';
import anuncie from './img/vetores/anuncie.png';
import editarPerfil from './img/vetores/editar-perfil.png';
import eventos from './img/vetores/eventos.png';
import inicio from './img/vetores/inicio.png';
import salva from './img/vetores/salva.png';
import menu from './img/Vector-menu.png'

const EditarPerfil = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className='menu'>
                <button className='menu-img' onClick={handleMenuToggle}>
                    <img src={menu}></img>
                </button>
                <ul className='pagina-artista-cadastro-UL'>
                    <li className='pagina-artista-cadastro-LI'><img src={inicio} alt='inicio'></img>Inicio</li>
                    <li className='pagina-artista-cadastro-LI'><img src={eventos} alt='eventos'></img>Eventos</li>
                    <li className='pagina-artista-cadastro-LI'><img src={salva} alt='salvar'></img>Clube CULT</li>
                    <li className='pagina-artista-cadastro-LI'><img src={anuncie} alt='anuncie'></img>Anuncie</li>
                    <li className='pagina-artista-cadastro-LI'><img src={editarPerfil} alt='editar perfil'></img>Editar Perfil</li>
                    <li className='pagina-artista-cadastro-LI'><img src={ajuda} alt='ajuda'></img>Ajuda</li>
                </ul>
            </section>

            <section className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}>
                <ul className='pagina-artista-cadastro-UL-mobile'>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={inicio} alt='inicio'></img>Inicio</li>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={eventos} alt='eventos'></img>Eventos</li>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={salva} alt='salvar'></img>Clube CULT</li>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={anuncie} alt='anuncie'></img>Anuncie</li>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={editarPerfil} alt='editar perfil'></img>Editar Perfil</li>
                    <li className='pagina-artista-cadastro-LI-mobile'><img src={ajuda} alt='ajuda'></img>Ajuda</li>
                </ul>
            </section>
        </>
    );
};

export default EditarPerfil;