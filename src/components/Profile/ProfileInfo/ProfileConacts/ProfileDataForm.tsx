import {T_UpdateProfile, T_UserProfileBody} from "../../../../redux/reducers/profileReducer";
import React, {FC} from "react";
import {useFormik} from "formik";
import style from './profileData.module.scss'
import {AxiosResponse} from "axios";
import {T_ProfileResponse} from "../../../../api/api_profile";

type Props = {
    profile: T_UserProfileBody,
    changeEditMode: () => void
    updateProfile: (userBody: T_UpdateProfile) => Promise<AxiosResponse<T_ProfileResponse>>

}

const ProfileDataForm: FC<Props> = ({profile, changeEditMode, updateProfile}) => {

    const contactsFields = Object.keys(profile.contacts);
    const profileContacts = useFormik({
        initialValues: {
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            userId: profile.userId,
            aboutMe: profile.aboutMe,
            contacts: {...profile.contacts}
        },
        onSubmit: (values, formikHelpers) => {
            const {contacts, ...rest} = values
            const fullInfo = {...rest, contacts}
            updateProfile(fullInfo).then((res) => {
                if (res) {
                    const message = res.data.messages
                    message.forEach(el => {
                        const fieldForMessage = el.split('->')[1].slice(0, -1).toLowerCase()
                        formikHelpers.setFieldError(`contacts.${fieldForMessage}`, el)
                    })
                } else {
                    changeEditMode()
                }
            })
        }
    })
    return <div className={style.profileEditData}>
        <form onSubmit={profileContacts.handleSubmit}>
            <div className={style.userInformation}>
                <div>Username: <textarea {...profileContacts.getFieldProps('fullName')}/></div>
                <div>Looking for a job? <input type={'checkbox'} {...profileContacts.getFieldProps('lookingForAJob')}
                                               defaultChecked={profile.lookingForAJob}/></div>
                {profile.lookingForAJob &&
                    <div><b>My professional skills :</b><textarea
                        {...profileContacts.getFieldProps('lookingForAJobDescription')}
                    />
                    </div>}
                <div>
                    <b> About me :</b> <textarea  {...profileContacts.getFieldProps('aboutMe')}/>
                </div>
            </div>
            <div className={style.userContacts}>
                <b> Contacts :</b>
                {contactsFields.map(el => (
                    <div key={el}>
                        <div className={style.contactElement}>
                            {profileContacts.errors?.contacts?.[el] &&
                                <div>{profileContacts.errors.contacts[el]}</div>}
                            <input
                                placeholder={el}
                                {...profileContacts.getFieldProps(`contacts.${el}`)}
                                value={profileContacts.values.contacts[el]?.toString() || ''}
                                onChange={(e) => {
                                    profileContacts.setFieldValue(`contacts.${el}`, e.target.value);
                                }}
                            />
                        </div>
                    </div>
                ))}
                <button type={'submit'}>Submit</button>
            </div>
        </form>
    </div>;
};
export default ProfileDataForm
