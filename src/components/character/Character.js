import React from 'react';

import css from './character.module.scss.css'

const Character = ({character}) => {
    console.log(character)

    let {id, name, status, species, type, gender, image} = character

    return (
    <div className='generalBoxCharactersStyle'>
     <span className='charactersCardStyle'>
            <div>{<img src={image} alt={name}/>}</div>
            <br/>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status:{status}</div>
            <div> species: {species}</div>
            <div>type: {type}</div>
            <div>gender: {gender}</div>
        </span>
         </div>
    );
};

export {Character}