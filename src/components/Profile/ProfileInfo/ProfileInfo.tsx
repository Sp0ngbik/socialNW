import React, {FC} from 'react';
import {T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from '../Profile.module.scss'

type T_ProfileInfoProps = {
    updateUserStatus: (status: string) => void
    profile: T_UserProfileBody | null
    status: string
}


const ProfileInfo: FC<T_ProfileInfoProps> = ({profile, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <h3>{profile.fullName}</h3>
                <img
                    src={profile.photos.large
                        || profile.photos.small
                        || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'}
                    alt={'ava not found'}/>
                <ProfileStatusWithHooks updateUserStatus={updateUserStatus} status={status}/>
            </div>

        </div>
    );
};

export default ProfileInfo;