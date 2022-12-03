import React from 'react';

import {NavLink} from "react-router-dom";
import css from './header.module.scss.css'

const Header = () => {

    return (

        <span className='navBarStyle'>

            <NavLink to={'/home'}>HOME</NavLink>
            <NavLink to={'/character'}>CHARACTERS</NavLink>
            <img className='navbarLogoStyle' src={require('../../assets/logo/RickAndMorty.png')} alt="RickAndMorty"/>
            <NavLink to={'/location'}>LOCATIONS</NavLink>
            <NavLink to={'/episode'}>EPISODES</NavLink>
        </span>

    );
};

export {Header}