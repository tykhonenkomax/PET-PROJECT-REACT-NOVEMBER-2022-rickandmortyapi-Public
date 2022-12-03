import './App.css';

import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayouts} from "./layout/MainLayouts";
import {CharacterDetails, Characters, EpisodeLists, Episodes, Home, Locations, NotFoundPage} from "./components";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayouts/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'character'} element={<Characters/>}/>
                <Route path={'character/:id'} element={<CharacterDetails/>}/>
                <Route path={'episodeLists'} element={<EpisodeLists/>}/>
                <Route path={'location'} element={<Locations/>}/>
                <Route path={'episode'} element={<Episodes/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
