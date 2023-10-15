import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {T_MainActionType, T_StateObject} from "./redux/state";


type T_AppType = {
    state: T_StateObject;
    // addPost: () => void,
    // onChangePostValue: (value: string) => void
    dispatch: (action: T_MainActionType) => void
}
const App: FC<T_AppType> = ({state, dispatch}) => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/*'} element={<News/>}/>
                        <Route path={'/profile'}
                               element={<Profile profilePage={state.profilePage}
                                                 dispatch={dispatch}
                               />}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogPage={state.dialogPage}
                                                 dispatch={dispatch}
                               />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
