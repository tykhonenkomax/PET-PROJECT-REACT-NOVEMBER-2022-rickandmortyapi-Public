import React from 'react';

const Character = ({id, name, status, species, type, gender}) => {

    return (

        <div>
            id: {id},
            name: {name},
            status:{status},
            species: {species},
            type: {type},
            gender: {gender},
        </div>

    );
};

export {Character}