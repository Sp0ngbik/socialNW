import React from 'react';
import {addMessageAC, changeMessageTitleAC} from "../../redux/reducers/dialogReducer";
import {reduxStore, RootState} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";


type T_Dialog = {
    store: RootState
}

const DialogsContainer = (props: T_Dialog) => {
        const addMessageHandler = () => {
            reduxStore.dispatch(addMessageAC())
        }
        const onChangeDialogHandler = (text: string) => {
            reduxStore.dispatch(changeMessageTitleAC(text))
        }
        return (
            <Dialogs dialogPage={props.store.dialogPage} addMessage={addMessageHandler}
                     onChangeDialogHandler={onChangeDialogHandler}/>
        );
    }
;

export default DialogsContainer;