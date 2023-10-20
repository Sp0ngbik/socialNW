import React, {FC, RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import {T_PostData} from "../../../redux/store";
import Post from "./Post/Post";


type T_MyPosts = {
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    updateNewPostText: (text: string) => void
    addPostFunc: () => void
}


const MyPosts: FC<T_MyPosts> = ({profilePage, updateNewPostText, addPostFunc}) => {
    const newPostTitle: RefObject<HTMLTextAreaElement> = useRef(null)
    const onAddPostFunc = () => {
        if (newPostTitle.current) {
            addPostFunc()
        }
    }
    const onPostChange = () => {
        // newPostTitle.current && onChangePostValue(newPostTitle.current?.value)
        newPostTitle.current && updateNewPostText(newPostTitle.current.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    value={profilePage.newTextForPost}
                    onChange={onPostChange}
                    ref={newPostTitle}/>
                <button onClick={onAddPostFunc}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {profilePage.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;