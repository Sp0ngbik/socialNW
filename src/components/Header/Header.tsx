import React, {FC} from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {T_HeaderContainer} from "./HeaderContainer";

const Header: FC<T_HeaderContainer> = ({authUserState, setLogOutUserTC}) => {

    return <header className={s.header}>
        <div className={s.login_block}>
            {authUserState.isAuth ? <div>
                    <span>{authUserState.login}</span>
                    <button onClick={setLogOutUserTC}>Logout</button>
                </div> :
                <button><NavLink to={'/login'}>Login</NavLink></button>}
        </div>
    </header>
}

export default Header;