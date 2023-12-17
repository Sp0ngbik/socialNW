import React from 'react';
import s from './MyPosts.module.css';
import {T_PostData} from "../../../redux/store";
import AddPostMessage from "../../../helpers/AddPostMessage";
import Post from "./Post/Post";


type T_MyPosts = {
    profilePage: {
        posts: T_PostData[]
    }
    addPostAC: (newPostMessage: string) => void
}


const MyPosts = (props: T_MyPosts) => {
    console.log("RENDER")
    let {profilePage, addPostAC} = props;
    return (
        <div>
            My posts
            <div>
                <AddPostMessage addPostAC={addPostAC}/>
            </div>
            <div className={s.posts}>
                {profilePage.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

export default React.memo(MyPosts);