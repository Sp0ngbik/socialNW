import React from 'react';
import './App.css';
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {appInitializeTC} from "./redux/reducers/appReducer";
import {RootState} from "./redux/reduxStore";
import Preloader from "./components/common/Preloader/Preloader";


type T_AppProps = {
    appInitializeTC: () => void
    initialized: boolean
}

class App extends React.Component<T_AppProps> {

    componentDidMount() {
        this.props.appInitializeTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <BrowserRouter>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/*'} element={<News/>}/>
                            <Route path={'/profile/:id?'} element={<ProfileContainer/>}/>
                            <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        initialized: state.appReducer.appInitialized
    }
}
export default connect(mapStateToProps, {appInitializeTC})(App);
