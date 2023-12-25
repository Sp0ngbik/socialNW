import React, {Suspense} from 'react';
import './App.css';
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {appInitializeTC} from "./redux/reducers/appReducer";
import {reduxStore, RootState} from "./redux/reduxStore";
import Preloader from "./components/common/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'))


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
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={'/*'} element={<News/>}/>
                            <Route path={'/profile/:id?'}
                                   element={<ProfileContainer/>}/>
                            <Route path={'/dialogs/*'}
                                   element={<DialogsContainer/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        initialized: state.appReducer.appInitialized
    }
}
const AppContainer = connect(mapStateToProps, {appInitializeTC})(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={reduxStore}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp