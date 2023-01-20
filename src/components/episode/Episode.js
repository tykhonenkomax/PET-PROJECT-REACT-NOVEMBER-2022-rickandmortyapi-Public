import React, {useEffect, useState, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {locationAction} from '../../redux'
import {useGetLocationHook} from './hook'

const Episode = ({episode}) => {

    const {id, name, type, url} = episode;

    const {locationById} = useSelector(state => state.location)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(locationAction.getById());
        }, [dispatch]
    )

 const episodehook = useGetLocationHook(url)

    return (

        <div>
            {episodehook && episodehook.name}
            <div>{locationById && <div>
                <div>{locationById.name}</div>
                <div>{locationById.type}</div>
                <div></div>
            </div>}
            </div>
            <div>{name}</div>
            <div>{type}</div>
            <button onClick={() => dispatch(locationAction.getById({id}))}>GetByID</button>
        </div>

    );
};

export {Episode}