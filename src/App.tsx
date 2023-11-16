import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
