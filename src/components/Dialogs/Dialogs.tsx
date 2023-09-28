import React from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {T_Message, T_UserDialog} from "../../index";
import Message from "./Message/Message";


type T_Dialog = {
    dialogData: T_UserDialog[]
    messagesData: T_Message[]
}

const Dialogs = (props: T_Dialog) => {
    return (
        <div className={s.dialogs}>
            <div className={s.names_items}>
                {props.dialogData.map((el) => {
                    return <DialogItem name={el.name} id={el.id}/>
                })}
            </div>
            <div className={s.messages_items}>
                {props.messagesData.map(el => {
                    return <Message message={el.message}/>
                })}
            </div>
        </div>
    );
};

export default Dialogs;