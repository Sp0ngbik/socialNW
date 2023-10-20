import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/reduxStore";

type T_ProfilePage = {
 store:RootState
}
const Profile: FC<T_ProfilePage> = ({store}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={store} />
        </div>
    )
}

export default Profile;