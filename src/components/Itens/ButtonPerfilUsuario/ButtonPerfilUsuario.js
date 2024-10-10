import React from 'react';
import './ButtonPerfilUsuario.css'

const ButtonPerfilUsuario = () => {
    return (
        <>
            <section className='button'>
                <h3>Olá, Fulano de Tal</h3>
                <div className='button-anuncio'>
                    <button>Sair</button>
                    <button>Minha Conta</button>
                </div>
            </section>
        </>
    );
};

export default ButtonPerfilUsuario;