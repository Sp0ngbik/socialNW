import React, {RefObject, useRef} from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {T_Message, T_UserDialog} from "../../redux/store";


type T_Dialog = {
    dialogPage: {
        newMessageTitle: string
        dialogsData: T_UserDialog[],
        messageData: T_Message[],
    }
    onChangeDialogHandler: (text: string) => void
    addMessageHandler: () => void
}

const Dialogs = (props: T_Dialog) => {
        const refMessage: RefObject<HTMLTextAreaElement> = useRef(null)
        const addMessageHandler = () => {
            props.addMessageHandler()
        }
        const onChangeDialogHandler = () => {
            refMessage.current && props.onChangeDialogHandler(refMessage.current.value)
        }
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
                    <textarea
                        value={props.dialogPage.newMessageTitle}
                        onChange={onChangeDialogHandler}
                        ref={refMessage}/>
                    <button onClick={addMessageHandler}>Отправить</button>
                </div>
            </div>
        );
    }
;

export default Dialogs;