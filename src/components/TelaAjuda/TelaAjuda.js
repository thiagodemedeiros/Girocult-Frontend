import React from 'react';
import './TelaAjuda.css';

import ButtonPerfilUsuario from '../Itens/ButtonPerfilUsuario/ButtonPerfilUsuario';
import BannerHeader from '../Itens/BannerHeader/BannerHeader';

import banner from './img/banner.png'
// import aside from './img/man-confused-with-raised-hands 1.png'
import aside from './img/a1.png'

const TelaAjuda = () => {
    return (
        <>
            <BannerHeader imagem={banner}/>

            <ButtonPerfilUsuario/>

            <section className='TelaAjuda-body'>

                <div className='TelaAjuda-body-img'>
                    <img src={aside}></img>
                </div>

                <div className='TelaAjuda-body-formulario'>
                    <h1>Escreva sua dúvida</h1>

                    <div className='TelaAjuda-body-formulario-input'>
                        <h3>Nome</h3>
                        <input type="text" id="nome" name="nome" placeholder="Nome"></input>
                    </div>

                    <div className='TelaAjuda-body-formulario-input'>
                        <h3>E-mail</h3>
                        <input type="text" id="E-mail" name="E-mail" placeholder="E-mail"></input>
                    </div>

                    <div className='TelaAjuda-body-formulario-TelWats'>
                        <div className='TelaAjuda-body-formulario-input-2'>
                            <h3>Telefone</h3>
                            <input type="text" id="Telefone" name="Telefone" placeholder="Telefone"></input>
                        </div>

                        <div className='TelaAjuda-body-formulario-TelWats-wats'>
                            <h3>Whatsapp</h3>

                            <div className='TelaAjuda-body-formulario-TelWats-organizacao'>
                                <div className='TelaAjuda-body-formulario-TelWats-radio'>
                                    <input type="radio" id="Whatsapp-sim-nao" name="Whatsapp-sim-nao"></input>
                                    <h5>Sim</h5>
                                </div>

                                <div className='TelaAjuda-body-formulario-TelWats-radio'>
                                    <input type="radio" id="Whatsapp-sim-nao" name="Whatsapp-sim-nao"></input>
                                    <h5>Não</h5>
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className='TelaAjuda-body-formulario-Redes'>
                        <div className='TelaAjuda-body-formulario-redes-input-2'>
                            <h3>Instagram</h3>
                            <input type="text" id="Instagram" name="Instagram" placeholder="Ex: @Seunome"></input>
                        </div>

                        <div className='TelaAjuda-body-formulario-redes-input-2'>
                            <h3>Facebook</h3>
                            <input type="text" id="Facebook" name="Facebook" placeholder="Ex: @Seunome"></input>
                        </div>
                    </div>

                    <div className='TelaAjuda-body-formulario-mensagem'>
                        <h3>Mensagem</h3>
                        <input type="text" id="Mensagem" name="Mensagem" placeholder="Esceva a sua mensagem"></input>
                    </div>

                    <button>Enviar</button>
                </div>
            </section>
        </>
    );
};

export default TelaAjuda;
