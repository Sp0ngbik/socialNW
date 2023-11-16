import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {
    follow,
    setActivePage,
    setUsers,
    T_GetUsers,
    T_UsersBody,
    toggleLoader,
    unFollow
} from "../../redux/reducers/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type T_UsersProps = {
    usersPage: T_UsersBody[],
    totalCount: number,
    pageSize: number,
    activePage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setActivePage: (pageNumber: number) => void,
    // getUsers: (activePage: number, pageSize: number) => void
    setUsers: (users: T_GetUsers) => void
    toggleLoader: (loaderStatus: boolean) => void
    isLoading: boolean
}

class UsersContainer extends React.Component<T_UsersProps> {
    async componentDidMount() {
        this.props.toggleLoader(true);
        const response =
            await axios.get<T_GetUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`);
        this.props.setUsers(response.data);
        this.props.toggleLoader(false);
    }

    async onPageChanged(pageNumber: number) {
        this.props.toggleLoader(true);
        this.props.setActivePage(pageNumber)
        const response =
            await axios.get<T_GetUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`);
        this.props.setUsers(response.data);
        this.props.toggleLoader(false);

    }

    render() {
        const {follow, unFollow, usersPage, activePage, totalCount, pageSize, isLoading} = this.props
        return (
            <>
                {isLoading ?
                    <Preloader/> :
                    <Users follow={follow}
                           unFollow={unFollow}
                           totalCount={totalCount}
                           usersPage={usersPage}
                           activePage={activePage}
                           pageSize={pageSize}
                           onPageChanged={this.onPageChanged.bind(this)}/>
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
        isLoading: state.usersPage.isLoading
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
    setActivePage
}
export default connect(mapStateToProps,
    mapDispatch
)(UsersContainer)