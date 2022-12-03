import React from 'react';
import {useLocation} from "react-router-dom";
import {EpisodeList} from "../episodeList/EpisodeList";

const EpisodeLists = () => {

    const {state} = useLocation();
    let {episode} = state;

    return (

        <div>
            {
                episode.map(episodeList =><EpisodeList key={episodeList.id} episodeList={episodeList}/>)
            }
        </div>

    );
};

export {EpisodeLists}