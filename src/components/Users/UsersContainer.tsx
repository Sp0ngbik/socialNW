import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatch, RootState} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC} from "../../redux/reducers/usersReducer";


let mapStateToProps = (state: RootState) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        getUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)