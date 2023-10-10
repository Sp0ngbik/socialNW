import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
// import {addPost, onChangePostValue, state, subscribe, T_StateObject} from "./redux/state";
import {store} from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireThree = (state: any) => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)