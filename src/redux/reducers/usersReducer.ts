export type T_UsersBody = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean
}

export type T_GetUsers = {
    items: T_UsersBody[]
    pageSize: number,
    totalCount: number,
    activePage: number
    isLoading: boolean
}


const initialState: T_GetUsers = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    activePage: 1,
    isLoading: false
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


type T_SetUsers = ReturnType<typeof setUsers>
type T_FollowAC = ReturnType<typeof follow>
type T_UnFollowAC = ReturnType<typeof unFollow>
type T_ToggleLoaderAC = ReturnType<typeof toggleLoader>
type T_ChangeActivePageAC = ReturnType<typeof setActivePage>

export type T_MainUsersAction = T_FollowAC | T_UnFollowAC | T_SetUsers | T_ChangeActivePageAC | T_ToggleLoaderAC

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
                totalCount: action.users.totalCount
            }
        }
        case "CHANGE_ACTIVE_PAGE": {
            return {...state, activePage: action.page}
        }
        case "SWITCH_LOADER": {
            return {...state, isLoading: action.loaderStatus}
        }
        default:
            return state
    }
}

