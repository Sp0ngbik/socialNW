import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import userDefaultImage from "../../assets/images/icon-256x256.png";
import {T_UsersBody} from "../../redux/reducers/usersReducer";
import style from './users.module.css'

type T_UserProps = {
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    userBody: T_UsersBody
}

const User: FC<T_UserProps> = ({userBody, followHandler, unFollowHandler}) => {
    return (
        <div key={userBody.id} className={style.userBlock}>
               <span>
                         <div>
                             <NavLink to={`/profile/${userBody.id}`}>
                             <img
                                 src={userBody.photos.small || userDefaultImage}
                                 alt={'user nf'}/>
                             </NavLink>
                         </div>
                         <div>
                         {userBody.followed ?
                             <button
                                 disabled={userBody.followingInProgress}
                                 onClick={() => unFollowHandler(userBody.id)}>Unfollow</button>
                             :
                             <button
                                 disabled={userBody.followingInProgress}
                                 onClick={() => followHandler(userBody.id)}>Follow</button>
                         }
                         </div>
                     </span>
            <span>
                         <h5>{userBody.status}</h5>

                    <span>
                         <div>{userBody.name}</div><div>{userBody.status}</div>
                     </span>
                     <span>
                         <div>{'user.location.country'}</div><div>{'user.location.city'}</div>
                     </span>
                     </span>
        </div>
    );
};

export default User;