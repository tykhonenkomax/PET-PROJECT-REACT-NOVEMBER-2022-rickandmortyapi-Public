import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";

import {Character} from "../character/character";


const Characters = () => {

    const {character, error, loading} = useSelector(state => state.characters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll())
    }, [dispatch])

    return (

        <div>
            {loading && <h1>LOADING........................!</h1>}
            {error && JSON.stringify(error)}
            {
                character.map(character => <Character key={character.id} character={character}/>)
            }
        </div>

    );
};


export {Characters}