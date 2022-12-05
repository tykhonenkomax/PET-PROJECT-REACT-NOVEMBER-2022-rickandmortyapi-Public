import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {characterActions} from "../../redux";

import css from './searchBar.module.scss.css'

const SearchCharactersName = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchCharacters = (e) => {
        e.preventDefault()


        if (search) {
            dispatch(characterActions.searchCharacter(search))
        } else {
            dispatch(characterActions.getAll())
        }
    }

    return (

        <form onChange={searchCharacters}>
            <label>
                <input className={'searchBarStyle'}
                       type="text"
                       name='name'
                       placeholder="Search..."
                       onChange={(e) => setSearch(e.target.value)}
                       value={search}
                />
            </label>
        </form>

    );
};

export {SearchCharactersName}