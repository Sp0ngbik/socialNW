import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";

export type T_UserDialog = {
    name: string,
    id: number
}
export type T_Message = {
    id?: number
    message: string
}
export type T_PostData = {
    id: number, message: string, likesCount: number
}
export type T_Friend = {
    id: number, imageSrc: string
}
export type T_StateObject = {
    dialogPage: {
        newMessageTitle: string
        dialogsData: T_UserDialog[],
        messageData: T_Message[],
    },
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    sidebar: {
        friends: T_Friend[]
    },

}


type T_AddPostAC = {
    type: "ADD_POST",
}

type T_ChangeNewTextAC = {
    type: "CHANGE_POST_VALUE",
    text: string
}

type T_AddNewMessageAC = {
    type: "ADD_NEW_MESSAGE",
    newMessageTitle: string
}



export type T_MainActionType = T_AddPostAC | T_ChangeNewTextAC | T_AddNewMessageAC

export type T_StoreObject = {
    _state: T_StateObject,
    getState: () => T_StateObject,
    // _addPost: () => void,
    // _onChangePostValue: (value: string) => void,
    subscribe: (observer: (store: T_StateObject) => void) => void
    _callSubscriber: (state: T_StateObject) => void
    dispatch: (action: T_MainActionType) => void
}
export const store: T_StoreObject = {
    _state: {
        dialogPage: {
            newMessageTitle: '2',
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
        },
        profilePage: {
            newTextForPost: '',
            posts: [
                {id: 1, message: 'Hello,fellow', likesCount: 3},
                {id: 2, message: 'Welcome bro', likesCount: 5},
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
                },
                {
                    id: 2,
                    imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
                },
                {
                    id: 3,
                    imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
                }
            ]
        }
    },

    ////по сути создается отельная функция типа obsever который передается в subscribe
    _callSubscriber(store: T_StateObject) {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    //: (store: T_StateObject) => void) - это типизация
    subscribe(observer: (store: T_StateObject) => void) {
        this._callSubscriber = observer
    },
    // _addPost() {
    //     let newPost = {
    //         id: this._state.profilePage.posts.length + 1,
    //         message: this._state.profilePage.newTextForPost,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._callSubscriber(this._state);
    //     this._state.profilePage.newTextForPost = '';
    // },
    // _onChangePostValue(value: string) {
    //     this._state.profilePage.newTextForPost = value
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        // this._state.sidebar = sideBarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
        // if (action.type === 'ADD_POST') {
        //     let newPost = {
        //         id: this._state.profilePage.posts.length + 1,
        //         message: this._state.profilePage.newTextForPost,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._callSubscriber(this._state);
        //     this._state.profilePage.newTextForPost = '';
        // } else if (
        //     action.type === 'CHANGE_POST_VALUE'
        // ) {
        //     this._state.profilePage.newTextForPost = action.text
        //     this._callSubscriber(this._state)
        // } else if (action.type === 'ADD_NEW_MESSAGE') {
        //     let newMessage = {
        //         id: this._state.dialogPage.messageData.length + 1,
        //         message: this._state.dialogPage.newMessageTitle
        //     }
        //     this._state.dialogPage.messageData.push(newMessage)
        //     this._callSubscriber(this._state);
        //     this._state.dialogPage.newMessageTitle = ''
        // } else if (action.type === 'CHANGE_NEW_TITLE_MESSAGE') {
        //     this._state.dialogPage.newMessageTitle = action.text
        //
        //     this._callSubscriber(this._state);
        // }
    }

}





