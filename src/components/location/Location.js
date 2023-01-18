import React from 'react';
import {NavLink} from 'react-router-dom'
import css from './location.module.scss.css'

const Location = ({location}) => {
    const {id, name, type, dimension, residents, url} = location;


    return (

        <div className='locationStyle'>
            <div>LOCATION NAME</div>
            <div>{name}</div>
            <div>LOCATION TYPE</div>
            <div>{type}</div>
            <div>DIMENSION</div>
            <div>{dimension}</div>
            <NavLink to={id.toString()} state={location}><button>POH</button> </NavLink>

        </div>

    );
};

export {Location}