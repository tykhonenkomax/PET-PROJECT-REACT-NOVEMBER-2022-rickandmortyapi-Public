import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {locationAction} from "../../redux";

import {Location} from "../location/Location";

const Locations = () => {

    const {locations, error, loading} = useSelector(state => state.location);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(locationAction.getAll())
    }, [dispatch])

    return (

        <div>
            {loading && <div>Loading.....!</div>}
            {error && JSON.string(error)}
            {
                locations.map(location => <Location key={location.id} location={location}/>)
            }
        </div>

    );
};

export {Locations}