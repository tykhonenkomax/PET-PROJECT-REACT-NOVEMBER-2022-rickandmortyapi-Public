import React from 'react';

const Location = ({location}) => {

    const {name, type, dimension, residents} =location;
    console.log(name)

    return (

        <div>
            {name}
            {type}
        </div>

    );
};

export {Location}