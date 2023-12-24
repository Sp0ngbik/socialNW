import React from 'react';
import s from './MyPosts.module.scss';
import AddPostMessage from "../../../helpers/AddPostMessage";
import Post from "./Post/Post";
import {T_PostData} from "../../../redux/reducers/profileReducer";


type T_MyPosts = {
    profilePage: {
        posts: T_PostData[]
    }
    addPostAC: (newPostMessage: string) => void
}


const MyPosts = (props: T_MyPosts) => {
    let {profilePage, addPostAC} = props;
    return (
        <div className={s.myPostsBlock}>
            <span>My posts</span>
            <AddPostMessage addPostAC={addPostAC}/>
            <div className={s.posts_messages}>
                {profilePage.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

export default React.memo(MyPosts);