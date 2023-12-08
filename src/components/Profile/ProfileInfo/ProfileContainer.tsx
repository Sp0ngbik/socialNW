import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";
import {
    setUserProfileTC,
    setUserStatusTC,
    T_UserProfileBody,
    updateUserStatusTC
} from "../../../redux/reducers/profileReducer";
import React, {FC, useEffect} from "react";
import Profile from "../Profile";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/hooks";
import {withAuthRedirectHOC} from "../../../hoc/AuthRedirectHOC";
import {compose} from "redux";

export type T_ProfileProps = {
    setUserProfileTC: (userId: string) => void
    userProfile: T_UserProfileBody | null,
    updateUserStatusTC: (status: string) => void
    status: string
}
const ProfileContainer: FC<T_ProfileProps> = (props) => {
    const params = useParams<{ id: string }>()
    let userId = params.id
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setUserProfileTC(userId))
        dispatch(setUserStatusTC(userId))
    }, [userId, dispatch]);
    return <Profile {...props}/>
}

const mapStateProps = (state: RootState) => {
    return {
        userProfile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


const mapDispatchProps = {
    setUserProfileTC,
    updateUserStatusTC
}

export default compose<React.ComponentType>(
    withAuthRedirectHOC,
    connect(mapStateProps, mapDispatchProps))(ProfileContainer)

