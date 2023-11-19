export type T_AuthReducerInitial = {
    id: number,
    email: string,
    login: string
    isFetching: boolean,
    isAuth: boolean
}

export type T_ResponseAuthUser = Omit<T_AuthReducerInitial, 'isFetching' | 'isAuth'>

const initialState: T_AuthReducerInitial = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
}


type T_SetUserData = ReturnType<typeof setAuthUserDataAC>
type T_MainType = T_SetUserData

export const auth_reducer = (state = initialState, action: T_MainType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.userData, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (userData: T_ResponseAuthUser) => {
    return {type: "SET_USER_DATA", userData} as const
}