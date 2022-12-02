import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayouts} from "./layout/MainLayouts";
import {Characters, Episodes, Locations, NotFoundPage} from "./components";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={MainLayouts}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'characters'} element={<Characters/>}/>
                <Route path={'locations'} element={<Locations/>}/>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
