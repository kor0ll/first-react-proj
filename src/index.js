import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import App from "./App";
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

export const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (my_root) => {    
    my_root.render(
        <React.StrictMode>
            <App state={store.getState()} newPost={store.newPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(root);

store.subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
