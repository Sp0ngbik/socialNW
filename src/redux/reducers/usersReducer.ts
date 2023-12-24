import {AppDispatch} from "../reduxStore";
import {Api_users} from "../../api/api_users";
import {AxiosResponse} from "axios";
import {ActionCreator} from "redux";
import {objectFieldHelper} from "../../utils/validator/objectFieldHelper";

export type T_UsersBody = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    followingInProgress: boolean
}

export type T_GetUsers = {
    items: T_UsersBody[]
    pageSize: number,
    totalCount: number,
    activePage: number,
    isFetching: boolean,
    fake: number
}


const initialState: T_GetUsers = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    activePage: 1,
    isFetching: false,
    fake: 10
}

export const follow = (userId: number) => {
    return {type: 'users/FOLLOW_ACTION', userId} as const
}

export const unFollow = (userId: number) => {
    return {type: 'users/UNFOLLOW_ACTION', userId} as const
}

export const setUsers = (users: T_GetUsers) => {
    return {type: 'users/SET_USERS', users} as const
}

export const setActivePage = (page: number) => {
    return {type: 'users/CHANGE_ACTIVE_PAGE', page} as const
}

export const toggleLoader = (loaderStatus: boolean) => {
    return {type: 'users/SWITCH_LOADER', loaderStatus} as const
}
export const toggleFollowedLoader = (userId: number, isFollowing: boolean) => {
    return {type: 'users/SWITCH_FOLLOW_LOADER', userId, isFollowing} as const
}

type T_SetUsers = ReturnType<typeof setUsers>
type T_FollowAC = ReturnType<typeof follow>
type T_UnFollowAC = ReturnType<typeof unFollow>
type T_ToggleLoaderAC = ReturnType<typeof toggleLoader>
type T_ChangeActivePageAC = ReturnType<typeof setActivePage>
type T_ToggleFollowAC = ReturnType<typeof toggleFollowedLoader>

export type T_MainUsersAction =
    T_FollowAC
    | T_UnFollowAC
    | T_SetUsers
    | T_ChangeActivePageAC
    | T_ToggleLoaderAC
    | T_ToggleFollowAC

export const usersReducer = (state = initialState, action: T_MainUsersAction): T_GetUsers => {
    switch (action.type) {
        case "users/FOLLOW_ACTION":
            return objectFieldHelper(state, action.userId, {followed: true})

        case "users/UNFOLLOW_ACTION": {
            return objectFieldHelper(state, action.userId, {followed: false})

        }
        case "users/SET_USERS": {
            return {
                ...state,
                items: action.users.items.map(el => ({...el, followingInProgress: false})),
                totalCount: action.users.totalCount,
            }
        }
        case "users/CHANGE_ACTIVE_PAGE": {
            return {...state, activePage: action.page}
        }
        case "users/SWITCH_FOLLOW_LOADER": {
            return objectFieldHelper(state, action.userId, {followingInProgress: action.isFollowing})
        }
        case
        "users/SWITCH_LOADER"
        : {
            return {...state, isFetching: action.loaderStatus}
        }
        default:
            return state
    }
}

export const getUsersTC = (pageSize: number, activePage: number) => async (dispatch: AppDispatch) => {
    dispatch(toggleLoader(true));
    const response = await Api_users.getUsers(pageSize, activePage)
    dispatch(setActivePage(activePage))
    dispatch(setUsers(response));
    dispatch(toggleLoader(false));
}

const subscribeHandler = async (dispatch: AppDispatch, userId: number,
                                apiMethod: (userId: number) => Promise<AxiosResponse>,
                                actionCreator: ActionCreator<T_FollowAC | T_UnFollowAC>) => {
    try {
        dispatch(toggleFollowedLoader(userId, true))
        await apiMethod(userId)
        dispatch(actionCreator(userId))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleFollowedLoader(userId, false))
    }
}


export const followUserTC = (userId: number) => async (dispatch: AppDispatch) => {
    await subscribeHandler(dispatch, userId, Api_users.followUser, follow)
}

export const unfollowUseTC = (userId: number) => async (dispatch: AppDispatch) => {
    await subscribeHandler(dispatch, userId, Api_users.unFollowUser, unFollow)
}