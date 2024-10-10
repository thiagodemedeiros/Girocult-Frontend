import React from 'react';
import './Footer.css'
import logo from './img/logo.png';
import whatsappIcon from './img/whatsapp.png';
import telefoneIcon from './img/telefone.png';
import emailIcon from './img/email.png';

const Footer = () => {
    return (
        <footer>
            <div class="infos">
                <div class="infos-texto">
                    <div class="coluna1">
                        <h1>Guia Rápido</h1>
                        <ul>
                            <li>Início</li>
                            <li>A Giro CULT</li>
                            <li>Artistas</li>
                            <li>Agenda cultural</li>
                            <li>Contato</li>
                            <li>Cadastro de Artista</li>
                            <li>Login</li>
                            <li>Política de Privacidade</li>
                        </ul>
                    </div>

                    <div class="coluna1">
                        <h1>Giro Artistas</h1>
                        <ul>
                            <li>Atores</li>
                            <li>Cineastas</li>
                            <li>Escritores</li>
                            <li>Escultores</li>
                            <li>Fotógrafos</li>
                            <li>Músicos</li>
                            <li>Pintores</li>
                        </ul>
                    </div>

                    <div class="coluna1">
                        <h1>Divulgação</h1>
                        <ul>
                            <li>Para Artistas</li>
                            <li>Para Empresas</li>
                            <li>Clube Giro CULT</li>
                            <li>Planos</li>
                            <li>Catálogo comercial</li>
                        </ul>
                    </div>

                    <div class="coluna2">
                        <img src={logo} alt="" class="coluna2-imagem"></img>
                        <ul>
                            <li><img src={whatsappIcon} alt=""></img>+55 (73) 99865-1972</li>
                            <li><img src={telefoneIcon} alt=""></img>+55 (73) 98116-6292</li>
                            <li><img src={emailIcon} alt=""></img>contato@girocult.com.br</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="infos-direitos">
                <h4>2024. © Girocult - Todos os direitos reservados.</h4>
            </div>
        </footer>
    );
};

export default Footer;