import {T_UserProfileBody} from "../../../../redux/reducers/profileReducer";
import React, {FC} from "react";
import {useFormik} from "formik";
import style from './profileData.module.scss'

type Props = {
    profile: T_UserProfileBody,
    changeEditMode: () => void

}

const ProfileDataForm: FC<Props> = ({profile, changeEditMode}) => {
    const profileInfo = useFormik({
        initialValues: {
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            userId: profile.userId,
            aboutMe: profile.aboutMe,
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const contactsFields = Object.keys(profile.contacts);
    const profileContacts = useFormik({
        initialValues: {...profile.contacts},
        onSubmit: (values) => {
            const fullInfo = {...profileInfo.values, contacts: values}
            console.log(fullInfo)
        }
    })
    return <div className={style.profileEditData}>
        <form onSubmit={profileInfo.handleSubmit}>
            Username: <input {...profileInfo.getFieldProps('fullName')}/>
            <div>
                Looking for a job? <input type={'checkbox'} {...profileInfo.getFieldProps('lookingForAJob')}
                                          defaultChecked={profile.lookingForAJob}
            />
            </div>
            {profile.lookingForAJob &&
                <div><b>My professional skills :</b><input
                    {...profileInfo.getFieldProps('lookingForAJobDescription')}
                />
                </div>}
            <div>
                <b> About me :</b> <input  {...profileInfo.getFieldProps('aboutMe')}/>
            </div>
        </form>
        <form onSubmit={profileContacts.handleSubmit}>
            <b> Contacts :</b>
            {contactsFields.map(el => (
                <div key={el}>
                    <input
                        placeholder={el} {...profileContacts.getFieldProps(el)}
                        value={profile.contacts[el]?.toString()}/>
                </div>
            ))}
            <button onClick={changeEditMode} type={'submit'}>Submit</button>
        </form>
    </div>;
};
export default ProfileDataForm
