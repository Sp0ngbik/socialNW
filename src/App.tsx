import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {T_Message, T_UserDialog} from "./index";
import News from "./components/News/News";

type T_AppProps = {
    messagesData: T_Message[],
    dialogData: T_UserDialog[]
}

function App(props: T_AppProps) {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
