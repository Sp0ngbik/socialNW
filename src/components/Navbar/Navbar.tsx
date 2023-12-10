import React, {FC} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {T_Friend} from "../../redux/store";

type T_NavaBarPage = {
    friends: T_Friend[],
    isAuth: boolean
}

const Navbar: FC<T_NavaBarPage> = ({friends, isAuth}) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : ''}
                     to={isAuth ? '/profile' : '/login'}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={"/dialogs"}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'/news'}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={"/music"}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={"/setting"}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'/users'}>Users</NavLink>
        </div>
        <div className={s.friendsBlock}>
            <h2>Friends block</h2>
            <div className={s.friendInfo}>
                {friends.map((el) => {
                    return <img key={el.id} alt={'user ava not found'} src={el.imageSrc}/>
                })}
            </div>
        </div>
    </nav>
}

export default Navbar;