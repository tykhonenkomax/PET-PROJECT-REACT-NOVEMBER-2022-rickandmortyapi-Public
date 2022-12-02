import React from 'react';

import {Header} from "../components";
import {Outlet} from 'react-router-dom'


const MainLayouts = () => {

    return (

        <div>
           <Header/>
            <hr/>
            <Outlet/>
        </div>

    );
};

export {MainLayouts}