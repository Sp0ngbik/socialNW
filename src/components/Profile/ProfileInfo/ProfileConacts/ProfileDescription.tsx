import {T_UserProfileBody} from "../../../../redux/reducers/profileReducer";
import React, {FC} from "react";

type T_Props = {
    profile: T_UserProfileBody
    changeEditMode: () => void
}

const ProfileDescription: FC<T_Props> = ({profile, changeEditMode}) => {
    const contactsFields = Object.keys(profile.contacts);

    const contactsView = contactsFields.map(el => (
        <div key={el}>
            {profile.contacts[el] && <div>
                <b>{el} :</b> {profile.contacts[el]}
            </div>}
        </div>
    ));
    return <div>
        <div>
            <b> Looking for a job</b> : {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
            <div><b>My professional skills :</b>{profile.lookingForAJobDescription}</div>}
        <div>
            <b> About me :</b> {profile.aboutMe}
        </div>
        <b> Contacts :</b>
        {contactsView}
        <button onClick={changeEditMode}>Change</button>
    </div>;
};
export default ProfileDescription