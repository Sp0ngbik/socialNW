// import {rerenderEntireThree} from "../index";

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
export type T_StoreObject = {
    _state: T_StateObject,
    getState: () => T_StateObject,
    addPost: () => void,
    onChangePostValue: (value: string) => void,
    subscribe: (observer: (store: T_StateObject) => void) => void
    _callSubscriber: (state: T_StateObject) => void
}
export const store: T_StoreObject = {
    _state: {
        dialogPage: {
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
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newTextForPost,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newTextForPost = '';
    },
    onChangePostValue(value: string) {
        this._state.profilePage.newTextForPost = value
        this._callSubscriber(this._state)
    },
    _callSubscriber(state: T_StateObject) {
        console.log('state changed')
    },
    subscribe(observer: (store: T_StateObject) => void) {
        this._callSubscriber = observer
    }
}

