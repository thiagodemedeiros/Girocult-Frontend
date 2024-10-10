import React from 'react';
import './TelaLogin.css'
import banner from './img/banner.png';
import imagemLogin from './img/imagem-lado.png';

const TelaLogin = () => {
    return (
        <>
            <section className='TelaLogin-banner-principal'>
                <img src={banner}></img>
            </section>

            <section className='TelaLogin-login'>
                <div className='TelaLogin-login-imagem'>
                    <img src={imagemLogin}></img>
                </div>
                <div className='TelaLogin-login-inputs'>
                    <div className='TelaLogin-login-inputs-texto'>
                        <div className='TelaLogin-login-inputs-texto-login-container'>
                            <div className='TelaLogin-login-inputs-texto-login'>
                                <h1>Nome do Usuário ou Email</h1>
                                <input type="text" id="usuario/email" name="usuario/email" value='Login'></input>
                            </div>
                            <div className='TelaLogin-login-inputs-texto-login'>
                                <h1>Senha</h1>
                                <input type="text" id="senha" name="senha" value='*************'></input>
                            </div>
                        </div>
                        <div className='TelaLogin-login-inputs-texto-lembrar-checkbox'>
                            <input type="checkbox" id="lembrar" name="lembrar" value="lembrar"></input>
                            <h1>Lembrar</h1>
                        </div>
                        <button>Acessar</button>
                        <a>Esqueceu sua senha?</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TelaLogin;