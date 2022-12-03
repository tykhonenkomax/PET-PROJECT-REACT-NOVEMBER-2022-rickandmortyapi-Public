import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";

import {Character} from "../character/Character";
import css from './characters.module.scss.css'


const Characters = () => {

    const {characters, error, loading} = useSelector(state => state.character);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll())
    }, [dispatch])


    return (
        <div className='charactersBoxStyle'>
            {loading && <h1>LOADING........................!</h1>}
            {error && JSON.stringify(error)}
            {
                characters.map(character => <Character key={character.id} character={character} />)
            }
        </div>

    );
};


export {Characters}