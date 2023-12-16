import React, {FC} from 'react';
import {T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type T_ProfileInfoProps = {
    updateUserStatus: (status: string) => void
    profile: T_UserProfileBody | null
    status: string
}


const ProfileInfo: FC<T_ProfileInfoProps> = ({profile, status,updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt={'back not found'}
                     src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div>
                <h3>{profile.fullName}</h3>
                <img src={profile.photos.large || profile.photos.small || ''} alt={'ava not found'}/>
                {/*<ProfileStatus updateUserStatus={updateUserStatus} status={status}/>*/}
                <ProfileStatusWithHooks updateUserStatus={updateUserStatus} status={status}/>
            </div>

        </div>
    );
};

export default ProfileInfo;