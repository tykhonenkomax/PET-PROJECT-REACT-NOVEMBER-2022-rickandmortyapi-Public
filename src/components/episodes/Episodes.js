import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {episodeAction} from "../../redux";

import {Episode} from "../episode/Episode";
import axios from "axios";


const Episodes = () => {

    const {episodes, loading, error} = useSelector(state => state.episode);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeAction.getAll())
    }, [dispatch])

    let [go, soGo] = useState([]);

    function getByResident(url) {
        axios.get(`${url}`)
            .then(response => soGo(response.data))
    }

    return (

        <div>
            {go && go.name}
            {loading && <div>Loading.....!</div>}
            {error && JSON.stringify(error)}
            {
                episodes.map(episode => <Episode key={episode.id} episode={episode} getByResident={getByResident}/>)
            }
        </div>

    );
};

export {Episodes}