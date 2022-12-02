import React from 'react';
import css from './home.module.scss.css'

const Home = () => {

    return (

        <div className='generalBoxStyle'>
            <div>
            <span className='apiStyle1'>The</span>
            <span className='apiStyle2'>Rick and Morty</span>
            <span className='apiStyle3'>API</span>
            </div>
            <img className='imgStyle' src={require('../../assets/img/backgroundStars2.jpeg')} alt=""/>
        </div>

    );
};

export {Home}