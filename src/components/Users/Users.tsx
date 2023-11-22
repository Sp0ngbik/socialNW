import React, {FC} from 'react';
import style from "./users.module.css";
import userDefaultImage from "../../assets/images/icon-256x256.png";
import {NavLink} from "react-router-dom";
import {T_UsersContainerProps} from "./UsersContainer";

type T_UsersProps = {
    onPageChanged: (pageNumber: number) => void
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
}

export const Users: FC<T_UsersProps & T_UsersContainerProps> = ({
                                                                    follow,
                                                                    unFollow,
                                                                    usersPage,
                                                                    // pageSize,
                                                                    // totalCount,
                                                                    activePage,
                                                                    onPageChanged,
                                                                    followHandler,
                                                                    unFollowHandler,
                                                                }) => {
    // let pagesCount = Math.ceil(totalCount / pageSize)
    let pages: number[] = []
    for (let i = 1; i < 10; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <button key={crypto.randomUUID()}
                               onClick={() => onPageChanged(p)}
                               className={activePage === p ? style.selectedPage : ''}>
                    {p}</button>
            })}

            {usersPage.map(user =>
                <div key={user.id} className={style.userBlock}>
                     <span>
                         <div>
                             <NavLink to={`/profile/${user.id}`}>
                             <img
                                 src={user.photos.small || userDefaultImage}
                                 alt={'user nf'}/>
                             </NavLink>
                         </div>
                         <div>
                         {user.followed ?
                             <button
                                 disabled={user.followingInProgress}
                                 onClick={() => unFollowHandler(user.id)}>Unfollow</button>
                             :
                             <button
                                 disabled={user.followingInProgress}
                                 onClick={() => followHandler(user.id)}>Follow</button>
                         }
                         </div>
                     </span>
                    <span>
                    <span>
                         <div>{user.name}</div><div>{user.status}</div>
                     </span>
                     <span>
                         <div>{'user.location.country'}</div><div>{'user.location.city'}</div>
                     </span>
                     </span>
                </div>)}
        </div>
    );
};

export default Users;