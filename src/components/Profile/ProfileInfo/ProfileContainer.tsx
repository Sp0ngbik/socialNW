import {toggleLoader} from "../../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";
import {setUserProfile, T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import axios from "axios";
import React, {FC, useEffect} from "react";
import Profile from "../Profile";
import {useParams} from "react-router-dom";

export type T_ProfileProps = {
    setUserProfile: (userProfileBody: T_UserProfileBody) => void
    toggleLoader: (loaderStatus: boolean) => void
    userProfile: T_UserProfileBody | null,
    isFetching: boolean,
}

const ProfileContainer: FC<T_ProfileProps> = ({setUserProfile, userProfile, isFetching, toggleLoader}) => {
    const params = useParams<{ id: string }>()
    let userId = params.id
    if (!userId) {
        userId = '2'
    }
    useEffect(() => {
        toggleLoader(true)
        axios.get<T_UserProfileBody>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                setUserProfile(res.data);
                toggleLoader(false);
            });
    }, [userId, setUserProfile, toggleLoader]);
    return <Profile setUserProfile={setUserProfile}
                    toggleLoader={toggleLoader}
                    userProfile={userProfile}
                    isFetching={isFetching}/>
}

// class ProfileContainer extends React.Component<T_ProfileProps> {
//
//     async componentDidMount() {
//         this.props.toggleLoader(true);
//         let location = document.location.pathname.split('/')
//         let userId = '2'
//         if (location.length > 2) {
//             userId = location.slice(-1).join('')
//         }
//         await axios.get<T_UserProfileBody>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//             .then(res => {
//                 this.props.setUserProfile(res.data);
//                 this.props.toggleLoader(false);
//             });
//     }
//
//     render() {
//         return (
//             <Profile {...this.props}/>
//         );
//     }
// }

const mapStateProps = (state: RootState) => {
    return {
        isFetching: state.usersPage.isFetching,
        userProfile: state.profilePage.profile,
    }
}
const mapDispatchProps = {
    setUserProfile,
    toggleLoader,
}

// const WithUrlData = withRouter(ProfileContainer)
export default connect(mapStateProps, mapDispatchProps)(ProfileContainer);
