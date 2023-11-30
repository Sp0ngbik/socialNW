import React from 'react';
import './App.css';
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileCompose from "./components/Profile/ProfileInfo/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile/:id?'} element={<ProfileCompose/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
