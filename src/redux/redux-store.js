import {applyMiddleware, combineReducers, legacy_createStore as createStore,  } from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import ThunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    messagesPage: messagesReducer, 
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;