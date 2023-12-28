import {T_UserContacts} from "../../../../redux/reducers/profileReducer";
import React, {FC} from "react";

type T_Props = {
    contacts: T_UserContacts
}

const ProfileContacts: FC<T_Props> = ({contacts}) => {
    const contactsFields = Object.keys(contacts);
    const contactsView = contactsFields.map(el => (
        <div key={el}>
            {contacts[el] && <div>
                <b>{el} :</b> {contacts[el]}
            </div>}
        </div>
    ));
    return <div>{contactsView}</div>;
};
export default  ProfileContacts