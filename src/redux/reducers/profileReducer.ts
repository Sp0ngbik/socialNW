import {T_MainActionType, T_PostData} from "../store";

type T_ProfileReducer = {
    newTextForPost: string,
    posts: T_PostData[]
}

let initialState = {
    newTextForPost: '3',
    posts: [
        {id: 1, message: 'Hello,fellow', likesCount: 3},
        {id: 2, message: 'Welcome bro', likesCount: 5},
    ]
}

export const profileReducer = (state: T_ProfileReducer = initialState, action: T_MainActionType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: state.posts.length + 1,
                message: state.newTextForPost,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newTextForPost = '';
            return state
        case 'CHANGE_POST_VALUE':
            state.newTextForPost = action.text
            return state
        default:
            return state
    }
}
export const addPostAC = () => ({type: 'ADD_POST'} as const)

export const onChangePostAC = (text: string) => ({type: "CHANGE_POST_VALUE", text} as const)