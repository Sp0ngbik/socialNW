import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {reduxStore} from "./redux/reduxStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
setInterval(()=>{
    reduxStore.dispatch({type:'FAKE_ACTION'})
},1000)

root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </React.StrictMode>
);

