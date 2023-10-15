import {T_MainActionType, T_Message, T_UserDialog} from "../state";

type T_DialogState = {
    newMessageTitle: string
    dialogsData: T_UserDialog[],
    messageData: T_Message[],
}


export const dialogReducer = (state: T_DialogState, action: T_MainActionType) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageTitle
            }
            state.messageData.push(newMessage)
            state.newMessageTitle = ''
            return state
        case 'CHANGE_NEW_TITLE_MESSAGE':
            state.newMessageTitle = action.text
            return state
        default:
            return state
    }
}


export const changeMessageTitleAC = (text: string) => ({type: 'CHANGE_NEW_TITLE_MESSAGE', text} as const)

export const addMessageAC = () => ({type: 'ADD_NEW_MESSAGE'} as const)