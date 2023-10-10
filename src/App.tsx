import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {T_StoreObject} from "./redux/state";


type T_AppType = {
    store: T_StoreObject;
}
const App: FC<T_AppType> = ({store}) => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar friends={store.getSideBar().friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile'}
                               element={<Profile profilePage={store.getState().profilePage}
                                                 onChangePostValue={store.onChangePostValue}
                                                 addPost={store.addPost}/>}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogPage={store.getDialogPage()}
                               />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
