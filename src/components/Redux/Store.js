import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./Reducers/combinedReducers";
import { thunk } from "redux-thunk";

const Mystore=createStore(combinedReducers,composeWithDevTools(applyMiddleware(thunk)))
export default Mystore