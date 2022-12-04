import React from 'react';
import {useLocation} from "react-router-dom";
import {EpisodeList} from "../episodeList/EpisodeList";
import css from './episodeLists.module.scss.css'

const EpisodeLists = () => {

    const {state} = useLocation();

    let {episode} = state;

    return (

        <div className='episodeSolid'>
            {
                episode.map((episodeUrl, index) => <EpisodeList key={index} episodeUrl={episodeUrl}/>)
            }
        </div>

    );
};

export {EpisodeLists}