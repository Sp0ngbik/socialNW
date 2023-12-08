import {AppDispatch} from "../reduxStore";
import {api_header} from "../../api/api_header";
import {T_LoginForm} from "../../components/Login/LoginForm";

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
type T_SetUserLogOut = ReturnType<typeof setLogOutUserDataAC>
type T_MainType = T_SetUserData | T_SetUserLogOut

export const auth_reducer = (state = initialState, action: T_MainType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.userData, isAuth: true}
        }
        case "SET_USER_LOGOUT": {
            return {...state, login: '', email: '', id: 0, isAuth: false}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (userData: T_ResponseAuthUser) => {
    return {type: "SET_USER_DATA", userData} as const
}

export const setLogOutUserDataAC = () => {
    return {type: "SET_USER_LOGOUT"} as const
}

export const setAuthUserTC = () => (dispatch: AppDispatch) => {
    api_header.authUser().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(res.data.data))
        }
    })
}
export const setLoginUserTC = (data: T_LoginForm) => (dispatch: AppDispatch) => {
    api_header.loginUser(data).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserTC())
        }
    })
}
export const setLogOutUserTC = () => (dispatch: AppDispatch) => {
    api_header.logOutUser().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setLogOutUserDataAC())
        }
    })
}