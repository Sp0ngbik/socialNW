import React, {ChangeEvent, FC, useState} from 'react';
import {T_UpdateProfile, T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import s from '../Profile.module.scss'
import ProfileDescription from "./ProfileConacts/ProfileDescription";
import ProfileDataForm from "./ProfileConacts/ProfileDataForm";
import {AxiosResponse} from "axios";
import {T_ProfileResponse} from "../../../api/api_profile";

type T_ProfileInfoProps = {
    updateUserStatus: (status: string) => void
    saveUserPhotoTC: (file: File) => void
    updateProfile: (userBody: T_UpdateProfile) => Promise<AxiosResponse<T_ProfileResponse>>
    profile: T_UserProfileBody | null
    status: string
    isOwner: boolean
}


const ProfileInfo: FC<T_ProfileInfoProps> = ({profile,updateProfile, isOwner, status, updateUserStatus, saveUserPhotoTC}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            saveUserPhotoTC(e.currentTarget.files[0])
        }
    }

    const onEditMode = () => {
        setEditMode(prevState => !prevState)
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

                <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>
                {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
                <div>

                    <div>
                        <ProfileDescription profile={profile} changeEditMode={onEditMode}/>
                        {
                            editMode &&
                            <ProfileDataForm updateProfile={updateProfile} profile={profile} changeEditMode={onEditMode}/>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;



