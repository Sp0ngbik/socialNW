import React from 'react';
import s from './dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddDialogMessage from "../../helpers/AddDialogMessage";
import {T_Message, T_UserDialog} from "../../redux/reducers/dialogReducer";


type T_Dialog = {
    dialogPage: {
        dialogsData: T_UserDialog[],
        messageData: T_Message[],
    }
    addMessageHandler: (newMessageTitle: string) => void
}

const Dialogs = (props: T_Dialog) => {
        return (
            <div className={s.dialogs}>
                <div className={s.names_items}>
                    {props.dialogPage.dialogsData.map((el) => {
                        return <DialogItem key={el.id} name={el.name} id={el.id}/>
                    })}
                </div>
                <div className={s.messages_items}>
                    {props.dialogPage.messageData.map(el => {
                        return <Message key={el.id} message={el.message}/>
                    })}
                    <AddDialogMessage addMessage={props.addMessageHandler}/>
                </div>
            </div>
        );
    }
;

export default Dialogs;