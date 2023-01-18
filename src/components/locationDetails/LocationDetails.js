import React from 'react';
import {useLocation} from 'react-router-dom'


const LocationDetails = () => {

    const {state} = useLocation()
    const {residents} = state;

    return (

        <div>
            {
                residents.map(resident => (<div key={resident}>{resident}</div>))
            }
        </div>
    );
};

export {LocationDetails}