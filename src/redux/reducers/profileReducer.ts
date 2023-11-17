import {T_PostData} from "../store";

export type T_UserProfileBody = {
    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
export type T_ProfileReducer = {
    profile: T_UserProfileBody | null,
    userId: number | null,
    newTextForPost: string,
    posts: T_PostData[]
}

type T_AddPostAC = ReturnType<typeof addPostAC>
type T_ChangePostTitleAC = ReturnType<typeof onChangePostAC>
type T_SetProfileBody = ReturnType<typeof setUserProfile>
type T_MainProfile = T_AddPostAC | T_ChangePostTitleAC | T_SetProfileBody


let initialState: T_ProfileReducer = {
    profile: null,
    userId: null,
    newTextForPost: '3',
    posts: [
        {id: 1, message: 'Hello,fellow', likesCount: 3},
        {id: 2, message: 'Welcome bro', likesCount: 5},
    ]
}

export const profileReducer = (state = initialState, action: T_MainProfile) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: state.posts.length + 1,
                message: state.newTextForPost,
                likesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts], newTextForPost: ''}
        case 'CHANGE_POST_VALUE':
            return {...state, newTextForPost: action.text}
        case "SET_USER_PROFILE": {
            return {...state, profile: action.userBody}
        }
        default:
            return state
    }
}
export const addPostAC = () => ({type: 'ADD_POST'} as const)

export const onChangePostAC = (text: string) => ({type: "CHANGE_POST_VALUE", text} as const)

export const setUserProfile = (userBody: T_UserProfileBody) => {
    return {type: 'SET_USER_PROFILE', userBody} as const
}

