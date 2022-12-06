import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {characterReducer, episodeReducer, locationReducer} from "../slice";

let rootReducer = combineReducers({
    character: characterReducer,
    location: locationReducer,
    episode: episodeReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}