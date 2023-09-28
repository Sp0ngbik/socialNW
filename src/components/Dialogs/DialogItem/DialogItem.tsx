import {NavLink} from "react-router-dom";
import s from "../dialogs.module.css";
import React from "react";
import {T_UserDialog} from "../../../index";


const DialogItem = (props: T_UserDialog) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}
                     className={({isActive}) => isActive ? s.name_active : s.name}>{props.name}</NavLink>
        </div>
    );
};
export default DialogItem;