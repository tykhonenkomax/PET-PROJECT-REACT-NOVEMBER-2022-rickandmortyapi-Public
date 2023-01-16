import React from 'react';
import css from './location.module.scss.css'

const Location = ({location}) => {
    console.log(location)
    const {name, type, dimension, residents, url} = location;

    return (

        <div className='locationStyle'>
            name: br {name} <br/>
            type: {type} <br/>
            dimension: {dimension}
        </div>

    );
};

export {Location}