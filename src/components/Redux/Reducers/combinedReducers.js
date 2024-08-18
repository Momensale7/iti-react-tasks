import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { listReducer } from "./listReducer";
import moviesReducer from "./moviesReducer.JS";

export default combineReducers({
    myCount:countReducer,
    myList:listReducer,
    myMovies:moviesReducer
})
