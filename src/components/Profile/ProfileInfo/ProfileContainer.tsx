import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";
import {setUserProfileTC, T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import React, {FC, useEffect} from "react";
import Profile from "../Profile";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/hooks";

export type T_ProfileProps = {
    setUserProfileTC: (userId: string) => void
    userProfile: T_UserProfileBody | null,
    isFetching: boolean,
}

const ProfileContainer: FC<T_ProfileProps> = (props) => {
    const params = useParams<{ id: string }>()
    let userId = params.id
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setUserProfileTC(userId))
    }, [userId, dispatch]);
    return <Profile {...props}/>
}

const mapStateProps = (state: RootState) => {
    return {
        isFetching: state.usersPage.isFetching,
        userProfile: state.profilePage.profile,
    }
}
const mapDispatchProps = {
    setUserProfileTC
}

// const WithUrlData = withRouter(ProfileContainer)
export default connect(mapStateProps, mapDispatchProps)(ProfileContainer);
