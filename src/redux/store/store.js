import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

let rootReducer = combineReducers({

})

let setupStore = () => configureStore({
reducer: rootReducer
})

export {
    setupStore
}