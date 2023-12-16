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
import {Navigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/hooks";
import {compose} from "redux";

export type T_ProfileProps = {
    setUserProfileTC: (userId: string) => void
    userProfile: T_UserProfileBody | null,
    updateUserStatusTC: (status: string) => void
    status: string
    isAuth: boolean
}
const ProfileContainer: FC<T_ProfileProps> = (props) => {
    const params = useParams<{ id: string }>()
    let userId = params.id
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUserProfileTC(userId))
        dispatch(setUserStatusTC(userId))
    }, [userId, dispatch]);


    if (!userId && !props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return <Profile {...props}/>
}

const mapStateProps = (state: RootState) => {
    return {
        userProfile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.authReducer.isAuth
    }
}


const mapDispatchProps = {
    setUserProfileTC,
    updateUserStatusTC
}

export default compose<React.ComponentType>(
    connect(mapStateProps, mapDispatchProps))(ProfileContainer)

