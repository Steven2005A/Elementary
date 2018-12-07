import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Auth from "./Auth";

const auth = new Auth();

let state={};
window.setState =   (changes)   =>  {
    state=Object.assign({}, state, changes);
    ReactDOM.render(<App{...state} />, document.getElementById('root')); 
};

/* eslint no-restricted-globals: */
let username= auth.getProfile().given_name || "New User";

let initialState={
    name: username,
    location: location.pathname.replace(/^\/?|\/$/g,""),
    auth

};

window.setState(initialState);

serviceWorker.unregister();
