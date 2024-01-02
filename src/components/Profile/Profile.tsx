import React, {FC} from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {T_ProfileProps} from "./ProfileInfo/ProfileContainer"

type T_Props = {
    isOwner: boolean
}

const Profile: FC<T_ProfileProps & T_Props> = ({userProfile,updateProfileInfoTC, saveUserPhotoTC, isOwner, status, updateUserStatusTC}) => {
    return (
        <div className={s.profile_content}>
            <ProfileInfo
                updateProfile = {updateProfileInfoTC}
                saveUserPhotoTC={saveUserPhotoTC}
                isOwner={isOwner}
                updateUserStatus={updateUserStatusTC}
                status={status}
                profile={userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;