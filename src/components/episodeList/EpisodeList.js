import React from 'react';

import {useGetEpisodeHook} from "./hooks";
import css from './episodeList.module.scss.css'
import {useSelector} from "react-redux";


const EpisodeList = ({episodeUrl}) => {

    const episode = useGetEpisodeHook(episodeUrl);

    return (

        <div>
            {
                <div className='generalEpisodeBox'>
                <div className='maneStyle'>
                    {episode?.name}
                </div>
                    <div className='lineStyle'></div>
                    <br/>
                    <div className='style'>{episode?.episode}</div>
                    <br/>
                    <div className='style'>
                        {episode?.air_date}
                    </div>
                    <br/>
                    <div className='style'>
                        {episode?.created}
                    </div>
                    <br/>
                </div>
            }
        </div>

    );
};

export {EpisodeList}