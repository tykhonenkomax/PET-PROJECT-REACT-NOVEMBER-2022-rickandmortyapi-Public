import React from 'react';

const Location = ({location}) => {
    console.log(location)
    const {name, type, dimension, residents, url} = location;

    return (

        <div>
            name: {name} <br/>
            type: {type} <br/>
            dimension: {dimension}
            {url}
        </div>

    );
};

export {Location}