import React from 'react';
import './EscolherArquivo.css';

const EscolherArquivo = ({ texto, infoArquivo, infoArquivo2 }) => {
    return (
        <>
            <section className='EscolherArquivo'>
                <h3>{texto}</h3>
                <div className='EscolherArquivo-selecao'>
                    <label for='selecao-arquivo'>Escolher Arquivo</label>
                    <input type="file" id='selecao-arquivo'/>
                    <h4>Nenhum arquivo escolhido</h4>
                </div>
                <div className='EscolherArquivo-info-h5'>
                    <h5>{infoArquivo}</h5>
                    <h5 className='EscolherArquivo-info-h5-infoArquivo2'>{infoArquivo2}</h5>
                </div>
            </section>
        </>
    );
};

export default EscolherArquivo;
