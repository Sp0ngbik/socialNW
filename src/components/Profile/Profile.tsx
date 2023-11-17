import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {T_ProfileProps} from "./ProfileInfo/ProfileContainer"

const Profile: FC<T_ProfileProps> = ({userProfile}) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;