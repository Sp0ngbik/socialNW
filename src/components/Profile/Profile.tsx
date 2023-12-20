import React, {FC} from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {T_ProfileProps} from "./ProfileInfo/ProfileContainer"

const Profile: FC<T_ProfileProps> = ({userProfile,status,updateUserStatusTC}) => {
    return (
        <div className={s.profile_content}>
            <ProfileInfo updateUserStatus={updateUserStatusTC} status={status}  profile={userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;