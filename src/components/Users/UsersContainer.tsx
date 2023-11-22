import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {
    follow,
    setActivePage,
    setUsers,
    T_GetUsers,
    T_UsersBody,
    toggleFollowedLoader,
    toggleLoader,
    unFollow
} from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Api_users} from "../../api/api_users";

export type T_UsersContainerProps = {
    usersPage: T_UsersBody[],
    totalCount: number,
    pageSize: number,
    activePage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setActivePage: (pageNumber: number) => void,
    setUsers: (users: T_GetUsers) => void
    toggleLoader: (loaderStatus: boolean) => void
    toggleFollowedLoader: (loaderStatus: boolean) => void
    isFetching: boolean
    isFollowingInProgress: boolean
}

class UsersContainer extends React.Component<T_UsersContainerProps> {
    async componentDidMount() {
        this.props.toggleLoader(true);
        const response = await Api_users.getUsers(this.props.pageSize, this.props.activePage)
        this.props.setUsers(response);
        this.props.toggleLoader(false);
    }

    async onPageChanged(pageNumber: number) {
        this.props.toggleLoader(true);
        this.props.setActivePage(pageNumber)
        const response = await Api_users.getUsers(this.props.pageSize, pageNumber)
        this.props.setUsers(response);
        this.props.toggleLoader(false);

    }

    async followHandler(userId: number) {
        try {
            this.props.toggleFollowedLoader(true)
            await Api_users.followUser(userId)
            this.props.follow(userId)
        } catch (e) {
            console.log(e)
        } finally {
            this.props.toggleFollowedLoader(false)
        }
    }

    async unFollowHandler(userId: number) {
        try {
            this.props.toggleFollowedLoader(true)
            await Api_users.unFollowUser(userId)
            this.props.unFollow(userId)
        } catch (e) {
            console.log(e)
        } finally {
            this.props.toggleFollowedLoader(false)
        }
    }

    render() {
        const {isFetching} = this.props
        return (
            <>
                {isFetching ?
                    <Preloader/> :
                    <Users {...this.props}
                           onPageChanged={this.onPageChanged.bind(this)}
                           followHandler={this.followHandler.bind(this)}
                           unFollowHandler={this.unFollowHandler.bind(this)}
                    />
                }

            </>

        );
    }

}


let mapStateToProps = (state: RootState) => {
    return {
        usersPage: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: AppDispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         getUsers: async (currentPage: number, pageSize: number) => {
//             dispatch(toggleLoaderAC(true))
//             await axios.get<T_GetUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
//                 .then((res) => dispatch(setUsersAC(res.data))).finally(() => {
//                     dispatch(toggleLoaderAC(false))
//                 })
//         },
//         setActivePage: (pageNumber: number) => {
//             dispatch(setActivePageAC(pageNumber))
//
//         },
//
//     }
// }
// const mapDispatch = {
//     follow: follow,
//     unFollow: unFollow,
//     toggleLoader: toggleLoader,
//     setUsers: setUsers,
//     setActivePage: setActivePage,
// }
const mapDispatch = {
    follow,
    unFollow,
    toggleLoader,
    setUsers,
    setActivePage,
    toggleFollowedLoader
}
export default connect(mapStateToProps,
    mapDispatch
)(UsersContainer)