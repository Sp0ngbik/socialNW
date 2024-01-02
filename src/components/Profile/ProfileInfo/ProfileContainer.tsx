import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";
import {
    saveUserPhotoTC,
    setUserProfileTC,
    setUserStatusTC,
    T_UpdateProfile,
    T_UserProfileBody,
    updateProfileInfoTC,
    updateUserStatusTC
} from "../../../redux/reducers/profileReducer";
import React, {FC, useEffect} from "react";
import Profile from "../Profile";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {AxiosResponse} from "axios";
import {T_ProfileResponse} from "../../../api/api_profile";

export type T_ProfileProps = {
    updateUserStatusTC: (status: string) => void
    setUserProfileTC: (userId?: string) => void
    setUserStatusTC: (userId?: string) => void
    saveUserPhotoTC: (file: File) => void
    updateProfileInfoTC: (userBody: T_UpdateProfile) => Promise<AxiosResponse<T_ProfileResponse>>
    userProfile: T_UserProfileBody | null,
    status: string
    isAuth: boolean
}
const ProfileContainer: FC<T_ProfileProps> = (props) => {
    const {id} = useParams<{ id: string }>()
    const {setUserProfileTC, setUserStatusTC} = props
    const isOwner = !id
    useEffect(() => {
        setUserProfileTC(id)
        setUserStatusTC(id)
    }, [setUserProfileTC, setUserStatusTC, id]);


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
    saveUserPhotoTC,
    updateProfileInfoTC,
    setUserStatusTC
}

export default compose<React.ComponentType>(
    connect(mapStateProps, mapDispatchProps))(ProfileContainer)

