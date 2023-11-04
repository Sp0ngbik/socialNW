import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
// import {addPost, onChangePostValue, state, subscribe, T_StateObject} from "./redux/state";
// import {store} from "./redux/store";
import App from "./App";
import {reduxStore, RootState} from "./redux/reduxStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireThree = (store: RootState) => {
    root.render(
        <React.StrictMode>
            <Provider store={reduxStore}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>
    );
}
// rerenderEntireThree(store.getState())
// store.subscribe(rerenderEntireThree)s
rerenderEntireThree(reduxStore.getState())
reduxStore.subscribe(() =>
    rerenderEntireThree(reduxStore.getState())
)
