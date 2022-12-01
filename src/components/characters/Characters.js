import React, {useEffect} from 'react';
import {charactersServices} from "../../services/characters.services";

const Characters = () => {

    useEffect(()=>{
        charactersServices.getAll(data=> console.log(data))
    },[])

    return (

        <div>
            Characters
        </div>

    );
};

export {Characters}