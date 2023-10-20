import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {T_MainActionType} from "./redux/store";
import {RootState} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type T_AppType = {
    store: RootState;
    dispatch: (action: T_MainActionType) => void
}
const App: FC<T_AppType> = ({store}) => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar friends={store.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile'}
                               element={<Profile store={store}
                               />}/>
                        <Route path={'/dialogs/*'}
                               element={<DialogsContainer store={store}
                               />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
