import React, {FC, RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import {T_PostData} from "../../../redux/state";
import Post from "./Post/Post";

type T_MyPosts = {
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    onChangePostValue: (value: string) => void
    addPost: () => void
}


const MyPosts: FC<T_MyPosts> = ({profilePage, addPost, onChangePostValue}) => {
    const newPostTitle: RefObject<HTMLTextAreaElement> = useRef(null)
    const addPostFunc = () => {
        if (newPostTitle.current) {
            addPost()
        }
    }
    const onPostChange = () => {
        newPostTitle.current && onChangePostValue(newPostTitle.current?.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    value={profilePage.newTextForPost}
                    onChange={onPostChange}
                    ref={newPostTitle}/>
                <button onClick={addPostFunc}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {profilePage.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;