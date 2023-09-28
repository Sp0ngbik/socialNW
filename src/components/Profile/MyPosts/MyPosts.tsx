import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type T_PostData = {
    id: number, message: string, likesCount: number
}
const MyPosts = () => {
    let postData: T_PostData[] = [
        {id: 1, message: 'Hello,fellow', likesCount: 3},
        {id: 2, message: 'Welcome bro', likesCount: 5},
    ]
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;