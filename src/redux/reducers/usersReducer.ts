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

export type T_MainUsersAction =
    T_FollowAC
    | T_UnFollowAC
    | T_SetUsers
    | T_ChangeActivePageAC
    | T_ToggleLoaderAC
    | T_ToggleFollowAC

export const usersReducer = (state = initialState, action: T_MainUsersAction) => {
    switch (action.type) {
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
                items: action.users.items,
                totalCount: action.users.totalCount,
                followingInProgress: false
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
            return {...state, isLoading: action.loaderStatus}
        }
        default:
            return state
    }
}

