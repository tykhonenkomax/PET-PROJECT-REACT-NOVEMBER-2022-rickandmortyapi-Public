import React from 'react';
import css from './notFound.module.scss.css'

const NotFoundPage = () => {

    return (

        <div className='notFound'>
            <img className='imgStyle' src={require('../../assets/img/404.png')} alt=""/>
        </div>

    );
};

export {NotFoundPage}