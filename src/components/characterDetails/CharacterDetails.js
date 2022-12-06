import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import css from './characterDetails.module.scss.css'

const CharacterDetails = () => {

    const {state} = useLocation();

    return (
<div className='xxx'>
        <div className='characterDetails'>
            <div>{<img className='imgStyle' src={state.image} alt={state.name}/>}</div>
            <div className='nameStyle'> {state.name}</div>
           <div className='statusStyle'> status: {state.status}-{state.species}</div>
            <div className='createdStyle'> created: {state.created}</div>
            <div className='locationStyleName'>Last know location: {state.location.name}</div>
            <br/>
            <NavLink to={'/episodeLists'} state={state}><button className='button'>EPISODE</button></NavLink>

        </div>
</div>

    );
};

export {CharacterDetails}