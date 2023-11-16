import React, {FC} from 'react';
import style from "./users.module.css";
import userDefaultImage from "../../assets/images/icon-256x256.png";
import {T_UsersBody} from "../../redux/reducers/usersReducer";

type T_UsersProps = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    usersPage: T_UsersBody[],
    pageSize: number,
    totalCount: number,
    activePage: number,
    onPageChanged: (pageNumber: number) => void
}

export const Users: FC<T_UsersProps> = ({
                                            follow,
                                            unFollow,
                                            usersPage,
                                            // pageSize,
                                            // totalCount,
                                            activePage,
                                            onPageChanged
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
                             <img
                                 src={user.photos.small || userDefaultImage}
                                 alt={'user nf'}/>
                         </div>
                         <div>
                         {user.followed ?
                             <button onClick={() => follow(user.id)}>Unfollow</button>
                             :
                             <button onClick={() => unFollow(user.id)}>Follow</button>
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