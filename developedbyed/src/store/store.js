//so it is better to use redux core package if you 
//are learning for the development it is better you use  
//redux-toolkit
//so to remove this error you can do as follows
import {legacy_createStore as  createStore } from "redux";
//impoer legacy_craeteStore as createStore from redux core pacakage

import allReducer from "../reducers/index"

export const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//https://github.com/zalmoxisus/redux-devtools-extensi