import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {T_MainActionType, T_PostData} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type T_ProfilePage = {
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    // onChangePostValue: (value: string) => void
    // addPost: () => void
    dispatch: (action: T_MainActionType) => void
}
const Profile: FC<T_ProfilePage> = ({profilePage,dispatch}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch}  profilePage={profilePage}/>
        </div>
    )
}

export default Profile;