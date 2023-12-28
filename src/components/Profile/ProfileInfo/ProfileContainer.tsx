import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";
import {
    saveUserPhotoTC,
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
    updateUserStatusTC: (status: string) => void
    setUserProfileTC: (userId: string) => void
    saveUserPhotoTC:(file:File)=>void
    userProfile: T_UserProfileBody | null,
    status: string
    isAuth: boolean
}
const ProfileContainer: FC<T_ProfileProps> = (props) => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const isOwner = !id

    useEffect(() => {
        dispatch(setUserProfileTC(id))
        dispatch(setUserStatusTC(id))
    }, [id, dispatch]);


    if (!id && !props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return <Profile isOwner={isOwner} {...props}/>
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
    updateUserStatusTC,
    saveUserPhotoTC
}

export default compose<React.ComponentType>(
    connect(mapStateProps, mapDispatchProps))(ProfileContainer)

