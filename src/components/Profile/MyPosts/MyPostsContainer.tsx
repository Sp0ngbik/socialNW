import MyPosts from "./MyPosts";
import { RootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/reducers/profileReducer";

const mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps ={
    addPostAC
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);