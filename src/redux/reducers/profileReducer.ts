import {AppDispatch} from "../reduxStore";
import {Api_profile} from "../../api/api_profile";
import {toggleLoader} from "./usersReducer";


export type T_PostData = {
    id: number, message: string, likesCount: number
}
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
    posts: T_PostData[],
    status: string | null
}

type T_AddPostAC = ReturnType<typeof addPostAC>
type T_SetProfileBody = ReturnType<typeof setUserProfile>
type T_SetUserStatus = ReturnType<typeof setUserStatus>
type T_MainProfile = T_AddPostAC | T_SetProfileBody | T_SetUserStatus


let initialState: T_ProfileReducer = {
    profile: null,
    userId: null,
    posts: [
        {id: 1, message: 'Hello,fellow', likesCount: 3},
        {id: 2, message: 'Welcome bro', likesCount: 5},
    ],
    status: null
}

export const profileReducer = (state = initialState, action: T_MainProfile): T_ProfileReducer => {
    switch (action.type) {
        case "profile/ADD_POST":
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts]}

        case "profile/SET_USER_PROFILE": {
            return {...state, profile: action.userBody}
        }
        case "profile/SET_USER_STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const)


export const setUserProfile = (userBody: T_UserProfileBody) => {
    return {type: 'profile/SET_USER_PROFILE', userBody} as const
}
export const setUserStatus = (status: string) => {
    return {type: 'profile/SET_USER_STATUS', status} as const
}

export const setUserProfileTC = (userId: string = '30114') => async (dispatch: AppDispatch) => {
    dispatch(toggleLoader(true))
    try {
        const res = await Api_profile.getUser(userId)
        dispatch(setUserProfile(res.data));
    } catch (e) {
        console.log(e)
    }
    dispatch(toggleLoader(false));
}
export const setUserStatusTC = (userId: string = '30114') => async (dispatch: AppDispatch) => {
    try {
        const res = await Api_profile.getStatus(userId)
        dispatch(setUserStatus(res.data))
    } catch (e) {
        console.log(e)
    }
}

export const updateUserStatusTC = (status: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await Api_profile.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (e) {
        console.log(e)
    }

}