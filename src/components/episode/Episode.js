import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {locationAction} from '../../redux'
import axios from 'axios'

const Episode = ({episode}) => {

    const {id, name, type, url} = episode;

    const {locationById} = useSelector(state => state.location)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(locationAction.getById());
        }, [dispatch]
    )
    return (

        <div>
            {locationById&&locationById.name}
            <div>{name}</div>
            <div>{type}</div>
            <button onClick={() => dispatch(locationAction.getById({id}))}>GetByID</button>
        </div>

    );
};

export {Episode}