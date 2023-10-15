import React, {FC, RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import {addPostAC, onChangePostAC, T_MainActionType, T_PostData} from "../../../redux/state";
import Post from "./Post/Post";



type T_MyPosts = {
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    dispatch: (action: T_MainActionType) => void
}


const MyPosts: FC<T_MyPosts> = ({profilePage, dispatch}) => {
    const newPostTitle: RefObject<HTMLTextAreaElement> = useRef(null)
    const addPostFunc = () => {
        if (newPostTitle.current) {
            // addPost()
            dispatch(addPostAC())
        }
    }
    const onPostChange = () => {
        // newPostTitle.current && onChangePostValue(newPostTitle.current?.value)
        newPostTitle.current && dispatch(onChangePostAC(newPostTitle.current.value))
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