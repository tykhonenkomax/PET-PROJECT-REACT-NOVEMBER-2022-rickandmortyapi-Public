import React from 'react';
import {NavLink} from 'react-router-dom'
import css from './location.module.scss.css'

const Location = ({location}) => {
    const {id, name, type, dimension, residents, url} = location;

    return (

        <div className='locationStyle'>
            <div className='styleName'>Location</div>
            <div className='locationStyleName'>{name}</div>
            <div className='styleName'>Location Type</div>
            <div className='locationStyleName'>{type}</div>
            <div className='styleName'>Dimension</div>
            <div className='locationStyleName'>{dimension}</div>
            <NavLink to={id.toString()} state={location}><button className='buttonStyle'>Inhabitants of the planet</button> </NavLink>
        </div>

    );
};

export {Location}