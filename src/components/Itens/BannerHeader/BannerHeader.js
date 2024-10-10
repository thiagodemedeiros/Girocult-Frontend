import React from 'react';
import './BannerHeader.css'

const BannerHeader = ({imagem}) => {
    return (
        <>
            <section className='Banner-Pricipal-Girocult'>
                <img src={imagem}></img>
            </section>
        </>
    );
};

export default BannerHeader;