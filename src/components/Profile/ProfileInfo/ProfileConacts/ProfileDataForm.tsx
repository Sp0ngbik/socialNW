import {T_UserContacts} from "../../../../redux/reducers/profileReducer";
import React, {FC} from "react";
import {useFormik} from "formik";

type T_Props = {
    contacts: T_UserContacts,
}

const ProfileDataForm: FC<T_Props> = ({contacts}) => {
    const contactsFields = Object.keys(contacts);
    const profileDataFormik = useFormik({
        initialValues: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        } as T_UserContacts,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(profileDataFormik.values)
    return <div>
        <form onSubmit={profileDataFormik.handleSubmit}>
            {contactsFields.map(el => (
                <div key={el}>
                    {contacts[el] &&
                        <input placeholder={contacts[el]?.toString()} {...profileDataFormik.getFieldProps(el)}/>}
                </div>
            ))}
            <button type={'submit'}>Submit</button>
        </form>
    </div>;
};
export default ProfileDataForm
