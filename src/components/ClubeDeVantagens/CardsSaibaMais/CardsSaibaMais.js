import React from 'react';
import './CardsSaibaMais.css'
import ComponentCardSaibaMais from './ComponentCard/ComponentCardSaibaMais';
import imagem1 from './img/image1.png'
import imagem2 from './img/image2.png'
import imagem3 from './img/image3.png'
import imagem4 from './img/image4.png'
import imagem5 from './img/image5.png'
import imagem6 from './img/image6.png'
import imagem7 from './img/image7.png'
import imagem8 from './img/image8.png'
import imagem9 from './img/image9.png'
import imagem10 from './img/image10.png'
import imagem11 from './img/image11.png'
import imagem12 from './img/image12.png'

const CardsSaibaMais = () => {
    return (
        <>
            <section className='CardsSaibaMais-Container'>
                <ComponentCardSaibaMais imagem={imagem1}/>
                <ComponentCardSaibaMais imagem={imagem2}/>
                <ComponentCardSaibaMais imagem={imagem3}/>
                <ComponentCardSaibaMais imagem={imagem4}/>
                <ComponentCardSaibaMais imagem={imagem5}/>
                <ComponentCardSaibaMais imagem={imagem6}/>
                <ComponentCardSaibaMais imagem={imagem7}/>
                <ComponentCardSaibaMais imagem={imagem8}/>
                <ComponentCardSaibaMais imagem={imagem9}/>
                <ComponentCardSaibaMais imagem={imagem10}/>
                <ComponentCardSaibaMais imagem={imagem11}/>
                <ComponentCardSaibaMais imagem={imagem12}/>
            </section>
        </>
    );
};

export default CardsSaibaMais;