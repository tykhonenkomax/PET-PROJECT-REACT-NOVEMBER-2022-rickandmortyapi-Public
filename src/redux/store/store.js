import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer} from "../slice/charactersSlice";

let rootReducer = combineReducers({
    characters: charactersReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}