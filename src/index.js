import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import { callbackFunc, newPost, updateNewPostText } from './redux/state';
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';

export const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (my_root, state) => {    
    my_root.render(
        <React.StrictMode>
            <App state={state} newPost={newPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(root,state);

callbackFunc(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
