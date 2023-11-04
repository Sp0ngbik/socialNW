import React from 'react';
import {T_UserReducerInitial} from "../../redux/reducers/usersReducer";
import style from './users.module.css'

type T_UsersProps = {
    usersPage: T_UserReducerInitial,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    getUsers: (users: any) => void
}

const Users: React.FC<T_UsersProps> = ({usersPage, follow, unFollow}) => {
    return (
        <div>
            {usersPage.users.map(user =>
                <div key={user.id} className={style.userBlock}>
                    <span>
                        <div>
                            <img
                                src={user.photoUrl}
                                alt={'user nf'}/>
                        </div>
                        <div>
                        {user.followed ?
                            <button onClick={() => unFollow(user.id)}>Follow</button> :
                            <button onClick={() => follow(user.id)}>Unfollow</button>
                        }
                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{user.fullName}</div><div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div><div>{user.location.city}</div>

                    </span>
                    </span>
                </div>)}
        </div>
    );
};

export default Users;