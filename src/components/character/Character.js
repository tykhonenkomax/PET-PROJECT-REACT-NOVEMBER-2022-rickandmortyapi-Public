import React from 'react';

import css from './character.module.scss.css'
import {NavLink} from "react-router-dom";

const Character = ({character}) => {

    let {id, name, species, gender, image} = character

    return (
        <div className='generalBoxCharactersStyle'>
     <span className='charactersCardStyle'>
            <div>{<img className='imgStyleCharacters' src={image} alt={name}/>}</div>
            <br/>
            <div className='nameStyle'>{name}</div>
            <div className='speciesStyle'>{species} - {gender}</div>
         <br/>
         <NavLink to={id.toString()} state={character}><button className='button'> about</button></NavLink>

        </span>
        </div>
    );
};

export {Character}