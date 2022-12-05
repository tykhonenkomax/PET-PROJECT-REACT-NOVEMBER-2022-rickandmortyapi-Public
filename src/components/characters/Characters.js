import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";

import {Character} from "../character/Character";
import {SearchCharactersName} from "../searchCharactersName/SearchCharactersName";
import css from './characters.module.scss.css'


const Characters = () => {

    const {characters, error, loading} = useSelector(state => state.character);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll())
    }, [dispatch])

    console.log('_________',characters)

    return (

        <div className='searchFlex'>
            <div >
                <SearchCharactersName/>
            </div>
            <div className='charactersBoxStyle'>
                {loading && <h1>LOADING........................!</h1>}
                {loading === undefined && <h1>SORRY </h1>}
                {error && JSON.stringify(error)}
                {
                    characters.map(character => <Character key={character.id} character={character}/>)
                }
            </div>
        </div>

    );
};


export {Characters}