import MyPosts from "./MyPosts";
import {AppDispatch, RootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {addPostAC, onChangePostAC} from "../../../redux/reducers/profileReducer";


// type T_MyPosts = {
//     store: RootState
// }


// const MyPostsContainer: FC<T_MyPosts> = ({store}) => {
//     const addPostFunc = () => {
//         reduxStore.dispatch(addPostAC())
//     }
//     const onPostChange = (text: string) => {
//         reduxStore.dispatch(onChangePostAC(text))
//     }
//
//     return (
//         <MyPosts updateNewPostText={onPostChange} addPostFunc={addPostFunc} profilePage={store.profilePage}/>
//     )
// }

const mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPostFunc: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(onChangePostAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);