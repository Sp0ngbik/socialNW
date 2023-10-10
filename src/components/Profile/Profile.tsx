import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {T_PostData} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type T_ProfilePage = {
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    onChangePostValue: (value: string) => void
    addPost: () => void
}
const Profile: FC<T_ProfilePage> = ({profilePage, addPost, onChangePostValue}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={addPost} onChangePostValue={onChangePostValue} profilePage={profilePage}/>
        </div>
    )
}

export default Profile;