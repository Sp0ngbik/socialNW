import {T_MainActionType, T_Message, T_UserDialog} from "../store";

export type T_DialogState = {
    dialogsData: T_UserDialog[],
    messageData: T_Message[],
}

const initialState = {
    dialogsData: [
        {id: 1, name: "Vlad"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Alina"},
        {id: 4, name: "Vitya"}
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Students'},
        {id: 3, message: 'Welcome'},
        {id: 4, message: 'Again'},
    ],
}
export const dialogReducer = (state: T_DialogState = initialState, action: T_MainActionType):T_DialogState => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            const newMessage = {
                id: state.messageData.length + 1,
                message: action.newMessageTitle
            }
            return {...state, messageData: [newMessage, ...state.messageData]}
        default:
            return state
    }
}



export const addMessageAC = (newMessageTitle:string) => ({type: 'ADD_NEW_MESSAGE',newMessageTitle} as const)