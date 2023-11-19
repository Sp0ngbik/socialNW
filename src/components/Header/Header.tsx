import React, {FC} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {T_HeaderContainer} from "./HeaderContainer";

const Header: FC<T_HeaderContainer> = ({authUserState}) => {
    return <header className={s.header}>
        <img alt={'logo nf'} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.login_block}>
            {authUserState.isAuth ? <div>{authUserState.login}</div> : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;