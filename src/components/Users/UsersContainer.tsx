import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {followUserTC, getUsersTC, T_UsersBody, unfollowUseTC} from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

export type T_UsersContainerProps = {
    usersPage: T_UsersBody[],
    pageSize: number,
    activePage: number,
    isFetching: boolean
    getUsersTC: (pageSize: number, activePage: number) => void
    followUserTC: (userId: number) => void
    unfollowUseTC: (userId: number) => void,
}

class UsersContainer extends React.Component<T_UsersContainerProps> {
    async componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.activePage)
    }

    onPageChanged = async (pageNumber: number) => {
        this.props.getUsersTC(this.props.pageSize, pageNumber)
    }

    followHandler = async (userId: number) => {
        this.props.followUserTC(userId)
    }

    unFollowHandler = async (userId: number) => {
        this.props.unfollowUseTC(userId)
    }

    render() {
        const {isFetching} = this.props
        return (
            <>
                {isFetching ?
                    <Preloader/> :
                    <Users {...this.props}
                           onPageChanged={this.onPageChanged}
                           followHandler={this.followHandler}
                           unFollowHandler={this.unFollowHandler}
                    />
                }

            </>

        );
    }

}


let mapStateToProps = (state: RootState) => {
    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatch = {
    getUsersTC,
    followUserTC,
    unfollowUseTC
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatch),
)(UsersContainer)