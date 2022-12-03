import React from 'react';

import css from './layouts.module.scss.css'

import {Header} from "../components";
import {Outlet} from 'react-router-dom'


const MainLayouts = () => {

    return (

        <div>
           <Header/>
            <Outlet/>
        </div>

    );
};

export {MainLayouts}