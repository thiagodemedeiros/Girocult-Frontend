import React from 'react';
import './EditarPerfil.css';
import ButtonPerfilUsuario from '../Itens/ButtonPerfilUsuario/ButtonPerfilUsuario';
import BannerHeader from '../Itens/BannerHeader/BannerHeader';
import MenuUsuario from '../Itens/MenuUsuario/MenuUsuario';
import banner from './img/banner.png'
import Input30 from '../Itens/FormularioItens/input30/Input30';
import Input50 from '../Itens/FormularioItens/Input50/Input50';
import EscolherArquivo from '../Itens/FormularioItens/EscolherArquivo/EscolherArquivo';
import SelecaoTalento from './SelecaoTalento/SelecaoTalento';

const EditarPerfil = () => {
    return (
        <>
            <BannerHeader imagem={banner}/>
            <ButtonPerfilUsuario/>

            <body>
                <MenuUsuario/>

                <section className='EditarPerfil'>
                    <section className='EditarPerfil-formulario'>
                        <div className='EditarPerfil-formulario-itens'>
                            <div className='EditarPerfil-input-2linha'>
                                <Input50 texto = 'Senha' id = 'senha' placeholder = '************'/>
                                <Input50 texto = 'Confirmar Senha' id = 'confirmar-senha' placeholder = '************'/>
                            </div>
                            <div className='EditarPerfil-input-2linha'>
                                <Input50 texto = 'Nome Completo' id = 'nome-completo' placeholder = 'Ex: Fulano de Tal'/>
                                <Input50 texto = 'Email' id = 'email' placeholder = 'Digite aqui o seu melhor email'/>
                            </div>
                            <div className='EditarPerfil-input-3linha'>
                                <Input30 texto = 'Nome Artístico' id = 'nome-artistico' placeholder = 'Ex: Fulano de Tal'/>
                                <Input30 texto = 'Data de Nascimento' id = 'data-de-nascimento' placeholder = 'mm/dd/yy'/>
                                <Input30 texto = 'Telefone / Whatsapp' id = 'telwats' placeholder = '+55 71 9 123 456 789'/>
                            </div>
                            <SelecaoTalento/>
                            <div className='EditarPerfil-input-2linha-outro'>
                                <Input30 texto = 'Outro' id = 'outro' placeholder = 'Escreva'/>
                                <EscolherArquivo texto='Envie uma foto para o seu Perfil' infoArquivo = 'Faça upload de 1 arquivo aceito: jpg, jpeg, png. (formato quadrado)1080x1080px.' infoArquivo2 = 'O tamanho máximo é de 5MB.'/>
                            </div>
                            
                                <EscolherArquivo texto='Insira a sua biografia em arquivo Word ou PDF' infoArquivo = 'Faça upload de 1 arquivo aceito: PDF ou document' infoArquivo2 = 'O tamanho máximo é de 10 MB.'/>
                                <EscolherArquivo texto='Envie até 10 obras para serem divulgadas no seu perfil' infoArquivo = 'Faça upload de até 10 arquivos aceitos: PDF, drawing ou image' infoArquivo2 = 'O tamanho máximo é de 10 MB por item'/>
                            
                            <div className='EditarPerfil-input-3linha'>
                                <Input30 texto = 'Cidade' id = 'cidade' placeholder = 'Ex: Salvador'/>
                                <Input30 texto = 'Estado' id = 'estado' placeholder = 'Ex: Bahia'/>
                                <Input30 texto = 'País' id = 'pais' placeholder = 'Ex: Brasil'/>
                            </div>
                            <div className='EditarPerfil-input-3linha'>
                                <Input30 texto = 'Instagram' id = 'instagram' placeholder = 'Copie o link do teu perfil'/>
                                <Input30 texto = 'Facebook' id = 'facebook' placeholder = 'Copie o link do teu perfil'/>
                                <Input30 texto = 'LinkdIN' id = 'linkdin' placeholder = 'Copie o link do teu perfil'/>
                            </div>
                            <div className='EditarPerfil-input-3linha'>
                                <Input30 texto = 'Youtube' id = 'youtube' placeholder = 'Copie o link do teu perfil'/>
                                <Input30 texto = 'Behance' id = 'behance' placeholder = 'Copie o link do teu perfil'/>
                                <Input30 texto = 'Site / Portfólio' id = 'site-portfolio' placeholder = 'Copie o link do teu site'/>
                            </div>
                            <div className='editarperfil-button'>
                                <button>Editar</button>
                            </div>
                        </div>
                    </section>
                </section>
                
            </body>
        </>
    );
};

export default EditarPerfil;