import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {characterReducer} from "../slice/charactersSlice";

let rootReducer = combineReducers({
    character: characterReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}