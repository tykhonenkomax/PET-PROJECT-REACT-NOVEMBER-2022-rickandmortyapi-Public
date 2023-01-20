import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {episodeAction, locationAction} from "../../redux";

import {Episode} from "../episode/Episode";

const Episodes = () => {


    const {episodes, loading, error} = useSelector(state => state.episode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeAction.getAll())
    }, [dispatch])


    return (

        <div>
            {loading && <div>Loading.....!</div>}
            {error && JSON.stringify(error)}
            {
                episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
            }
        </div>

    );
};

export {Episodes}