import React, {FC} from 'react';
import {addPostAC, onChangePostAC} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {reduxStore, RootState} from "../../../redux/reduxStore";


type T_MyPosts = {
    store: RootState
}


const MyPostsContainer: FC<T_MyPosts> = ({store}) => {
    const addPostFunc = () => {
        reduxStore.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        reduxStore.dispatch(onChangePostAC(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPostFunc={addPostFunc} profilePage={store.profilePage}/>
    )
}

export default MyPostsContainer;