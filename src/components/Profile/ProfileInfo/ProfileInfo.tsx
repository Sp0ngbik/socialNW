import React, {FC} from 'react';
import {T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

type T_ProfileInfoProps = {
    profile: T_UserProfileBody | null
}


const ProfileInfo: FC<T_ProfileInfoProps> = ({profile}) => {

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
                <ProfileStatus status={profile.aboutMe}/>
            </div>

        </div>
    );
};

export default ProfileInfo;