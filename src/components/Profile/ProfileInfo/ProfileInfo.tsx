import React, {ChangeEvent, FC, useState} from 'react';
import {T_UserProfileBody} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import s from '../Profile.module.scss'
import ProfileContacts from "./ProfileConacts/ProfileContacts";
import ProfileDataForm from "./ProfileConacts/ProfileDataForm";

type T_ProfileInfoProps = {
    updateUserStatus: (status: string) => void
    saveUserPhotoTC: (file: File) => void
    profile: T_UserProfileBody | null
    status: string
    isOwner: boolean
}


const ProfileInfo: FC<T_ProfileInfoProps> = ({profile, isOwner, status, updateUserStatus, saveUserPhotoTC}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            saveUserPhotoTC(e.currentTarget.files[0])
        }
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
                <div>
                    <div>
                        <b> Looking for a job</b> : {profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    {profile.lookingForAJob &&
                        <div><b>My professional skills :</b>{profile.lookingForAJobDescription}</div>}
                    <div>
                        <b> About me :</b> {profile.aboutMe}
                    </div>
                    <div>
                        <button onClick={() => setEditMode(!editMode)}>Change</button>
                        <b> Contacts :</b>
                        {
                            editMode ?
                                <ProfileContacts contacts={profile.contacts}/> :
                                <ProfileDataForm contacts={profile.contacts}/>
                        }
                    </div>
                </div>
                {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
            </div>

        </div>
    );
};

export default ProfileInfo;



