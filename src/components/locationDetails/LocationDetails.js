import React from 'react';
import {useLocation} from 'react-router-dom'
import {Residents} from '../residents/Residents'

import css from './locationDetails.scss.css'


const LocationDetails = ({location}) => {

    const {state} = useLocation()

    return (
        <div className='wrapperGeneral'>
            <div className='wrapper'>
                {state.residents.map(res => <Residents key={res} residents={res}/>)}
            </div>
        </div>
    );
};

export {LocationDetails}