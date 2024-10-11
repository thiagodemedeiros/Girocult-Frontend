import React from 'react';
import AnunciarAgora from './components/AnunciarAgora/AnunciarAgora.js';
import SectionSejaArtista from './components/SectionSejaArtista/SectionSejaArtista.js';
import SectionCadastro from './components/SectionCadastro/SectionCadastro.js';
import PaginaArtistasCadastrados from './components/PaginaArtistasCadastrados/PaginaArtistasCadastrados.js';
import PaginaNoticia from './components/PaginaNoticia/PaginaNoticia.js';
import Footer from './components/Footer/Footer.js';
import TelaLogin from './components/TelaLogin/TelaLogin.js';
import ClubeDeVantagens from './components/ClubeDeVantagens/ClubeDeVantagens.js';
import Header from './components/Header/Header.js';
import TelaAjuda from './components/TelaAjuda/TelaAjuda.js';
import EditarPerfil from './components/EditarPerfil/EditarPerfil.js';
import ChamamentoCadastrarNovosArtistas from './components/Popup/ChamamentoCadastrarNovosArtistas/ChamamentoCadastrarNovosArtistas.js';
import IndicacaoProjeto from './components/Popup/IndicacaoProjeto/IndicacaoProjeto.js';
import './App.css';

function App() {
  return (
    <>
      {/* Popups */}
      <IndicacaoProjeto/>
      {/* <ChamamentoCadastrarNovosArtistas/> */}

      <div className='espacamento'></div>
      {/* Editar Perfil */}
      <Header/>
      <EditarPerfil/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Tela Ajuda */}
      <Header/>
      <TelaAjuda/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Clube de Vantagens */}
      <Header/>
      <ClubeDeVantagens/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Login */}
      <Header/>
      <TelaLogin/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Noticia */}
      <Header/>
      <PaginaNoticia/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Artistas cadastrados */}
      <Header/>
      <PaginaArtistasCadastrados/>
      <SectionSejaArtista/>
      <Footer/>

      <div className='espacamento'></div>
      {/* Anunciar */}
      <Header/>
      <AnunciarAgora/>
      <SectionSejaArtista/>
      <Footer/>
      
      <div className='espacamento'></div>
      {/* Cadastro */}
      <Header/>
      <SectionCadastro/>
      <SectionSejaArtista/>
      <Footer/>
    </>
  );
}

export default App;
