import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/reducers/profileReducer";
import {compose} from "redux";

const mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = {
    addPostAC
}

export const MyPostsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);