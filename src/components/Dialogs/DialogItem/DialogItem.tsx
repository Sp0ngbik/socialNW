import {NavLink} from "react-router-dom";
import s from "../dialogs.module.scss";
import React from "react";
import {T_UserDialog} from "../../../redux/store";


const DialogItem = (props: T_UserDialog) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}
                     className={({isActive}) => isActive ? s.name_active : s.name}>{props.name}</NavLink>
        </div>
    );
};
export default DialogItem;