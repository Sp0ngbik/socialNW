import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export type T_UserDialog = {
    name: string,
    id: number
}
export type T_Message = {
    id?: number
    message: string
}
let dialogsData: T_UserDialog[] = [
    {id: 1, name: "Vlad"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Alina"},
    {id: 4, name: "Vitya"}
]
let messagesData: T_Message[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Students'},
    {id: 3, message: 'Welcome'},
    {id: 4, message: 'Again'},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
            <App dialogData = {dialogsData} messagesData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
