import React, { useState } from 'react';
import './Header.css';

import logo from './img/logo.png';
import facebook from './img/Vector-facebook.png';
import twitter from './img/Vector-twitter.png';
import instagram from './img/Vector-instagram.png';
import youtube from './img/Vector-youtube.png';
import menu from './img/Vector-menu.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className='header-menu'>
                <div className='header-menu-container'>
                    <img src={logo} className='header-menu-logo' alt="Logo" />

                    <ul className='header-menu-texto'>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#giro-cult">Giro Cult</a></li>
                        <li><a href="#artistas">Artistas</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#clube-cult">Clube Cult</a></li>
                        <li><a href="#revista">Revista</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>

                    <ul className='header-menu-redes'>
                        <li><a href="#facebook"><img src={facebook} alt="Facebook" /></a></li>
                        <li><a href="#twitter"><img src={twitter} alt="Twitter" /></a></li>
                        <li><a href="#instagram"><img src={instagram} alt="Instagram" /></a></li>
                        <li><a href="#youtube"><img src={youtube} alt="YouTube" /></a></li>
                    </ul>

                    <button className='header-menu-texto-lateral' onClick={handleMenuToggle}>
                        <img src={menu} alt="Menu" />
                    </button>
                </div>
            </section>

            <div className={`header-menu-container-mobile ${isMenuOpen ? 'open' : ''}`}>
                <ul className='header-menu-texto-mobile'>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#giro-cult">Giro Cult</a></li>
                    <li><a href="#artistas">Artistas</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#clube-cult">Clube Cult</a></li>
                    <li><a href="#revista">Revista</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>

                <ul className='header-menu-redes-mobile'>
                    <li><a href="#facebook"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="#twitter"><img src={twitter} alt="Twitter" /></a></li>
                    <li><a href="#instagram"><img src={instagram} alt="Instagram" /></a></li>
                    <li><a href="#youtube"><img src={youtube} alt="YouTube" /></a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
