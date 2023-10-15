import {T_MainActionType, T_PostData} from "../state";

type T_ProfileReducer = {
    newTextForPost: string,
    posts: T_PostData[]
}

export const profileReducer = (state: T_ProfileReducer, action: T_MainActionType) => {
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