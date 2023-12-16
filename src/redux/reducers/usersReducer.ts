import {AppDispatch} from "../reduxStore";
import {Api_users} from "../../api/api_users";

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
    activePage: number
    isFetching: boolean
}


const initialState: T_GetUsers = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    activePage: 1,
    isFetching: false,
}

export const follow = (userId: number) => {
    return {type: 'FOLLOW_ACTION', userId} as const
}

export const unFollow = (userId: number) => {
    return {type: 'UNFOLLOW_ACTION', userId} as const
}

export const setUsers = (users: T_GetUsers) => {
    return {type: 'SET_USERS', users} as const
}

export const setActivePage = (page: number) => {
    return {type: 'CHANGE_ACTIVE_PAGE', page} as const
}

export const toggleLoader = (loaderStatus: boolean) => {
    return {type: 'SWITCH_LOADER', loaderStatus} as const
}
export const toggleFollowedLoader = (userId: number, isFollowing: boolean) => {
    return {type: 'SWITCH_FOLLOW_LOADER', userId, isFollowing} as const
}

type T_SetUsers = ReturnType<typeof setUsers>
type T_FollowAC = ReturnType<typeof follow>
type T_UnFollowAC = ReturnType<typeof unFollow>
type T_ToggleLoaderAC = ReturnType<typeof toggleLoader>
type T_ChangeActivePageAC = ReturnType<typeof setActivePage>
type T_ToggleFollowAC = ReturnType<typeof toggleFollowedLoader>
type T_FAKE = ReturnType<typeof fakeAC>

export type T_MainUsersAction =
    T_FollowAC
    | T_UnFollowAC
    | T_SetUsers
    | T_ChangeActivePageAC
    | T_ToggleLoaderAC
    | T_ToggleFollowAC
    | T_FAKE

export const usersReducer = (state = initialState, action: T_MainUsersAction): T_GetUsers => {
    switch (action.type) {
        case "FAKE_ACTION": {
            return {...state, isFetching: !state.isFetching}
        }
        case "FOLLOW_ACTION": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW_ACTION": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}

        }
        case "SET_USERS": {
            return {
                ...state,
                items: action.users.items.map(el => ({...el, followingInProgress: false})),
                totalCount: action.users.totalCount,
            }
        }
        case "CHANGE_ACTIVE_PAGE": {
            return {...state, activePage: action.page}
        }
        case "SWITCH_FOLLOW_LOADER": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {
                    ...el,
                    followingInProgress: action.isFollowing
                } : el)
            }
        }
        case "SWITCH_LOADER": {
            return {...state, isFetching: action.loaderStatus}
        }
        default:
            return state
    }
}

export const fakeAC = () => {
    return {type: 'FAKE_ACTION'} as const
}

export const getUsersTC = (pageSize: number, activePage: number) => async (dispatch: AppDispatch) => {
    dispatch(toggleLoader(true));
    const response = await Api_users.getUsers(pageSize, activePage)
    dispatch(setActivePage(activePage))
    dispatch(setUsers(response));
    dispatch(toggleLoader(false));
}

export const followUserTC = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleFollowedLoader(userId, true))
        await Api_users.followUser(userId)
        dispatch(follow(userId))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleFollowedLoader(userId, false))
    }
}

export const unfollowUseTC = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleFollowedLoader(userId, true))
        await Api_users.unFollowUser(userId)
        dispatch(unFollow(userId))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleFollowedLoader(userId, false))
    }
}