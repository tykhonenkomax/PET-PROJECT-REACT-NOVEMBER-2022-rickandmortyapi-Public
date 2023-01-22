import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {locationAction} from '../../redux'


const Episode = ({episode,getByResident}, ) => {

    const {id, name, type, url} = episode;

    const {locationById} = useSelector(state => state.location)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(locationAction.getById());
        }, [dispatch]
    )


    return (

        <div>
            <div>{locationById && <div>
                <div>{locationById.name}</div>
                <div>{locationById.type}</div>
                <div></div>
            </div>}
            </div>
            <div>{name}</div>
            <div>{type}</div>
            <button onClick={() => getByResident(url)}>getByResident</button>
        </div>

    );
};

export {Episode}