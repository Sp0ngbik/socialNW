import {addMessageAC, dialogReducer, T_DialogState} from "../redux/reducers/dialogReducer";

let dialogState: T_DialogState
beforeEach(() => {
    dialogState = {
        dialogsData: [
            {id: 3, name: "Alina"},
            {id: 4, name: "Vitya"}

        ],
        messageData: [
            {id: 4, message: 'Again'},
            {id: 3, message: 'Welcome'},

        ],
    }
})


test('should add new message', () => {
    let afterAction = dialogReducer(dialogState, addMessageAC('2'))
    expect(afterAction.messageData[0].message).toStrictEqual('2')
    expect(afterAction.messageData.length).toBe(3)
})