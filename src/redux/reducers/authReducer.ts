import {AppDispatch, AppThunk, AppThunkDispatch} from "../reduxStore";
import {api_header} from "../../api/api_header";
import {T_LoginForm} from "../../components/Login/LoginForm";

export type T_AuthReducerInitial = {
    id: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean,
    loginError: string
}

export type T_ResponseAuthUser = Omit<T_AuthReducerInitial, 'isFetching' | 'isAuth' | 'loginError'>

const initialState: T_AuthReducerInitial = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
    loginError: ''
}


type T_SetUserData = ReturnType<typeof setAuthUserDataAC>
type T_SetUserLogOut = ReturnType<typeof setLogOutUserDataAC>
type T_SetErrorText = ReturnType<typeof setLoginErrorAC>
type T_MainType = T_SetUserData | T_SetUserLogOut | T_SetErrorText

export const auth_reducer = (state = initialState, action: T_MainType): T_AuthReducerInitial => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.userData, isAuth: true}
        }
        case "SET_USER_LOGOUT": {
            return {...state, login: '', email: '', id: 0, isAuth: false}
        }
        case "SET_LOGIN_ERROR": {
            return {...state, loginError: action.errorText[0]}
        }
        default:
            return state
    }
}

const setLoginErrorAC = (errorText: string[]) => {
    return {type: 'SET_LOGIN_ERROR', errorText} as const
}


export const setAuthUserDataAC = (userData: T_ResponseAuthUser) => {
    return {type: "SET_USER_DATA", userData} as const
}

export const setLogOutUserDataAC = () => {
    return {type: "SET_USER_LOGOUT"} as const
}

export const setAuthUserTC = ():AppThunk => async (dispatch: AppDispatch) => {
    const res = await api_header.authUser();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(res.data.data));
    }
    return res

}
export const setLoginUserTC = (data: T_LoginForm) => async (dispatch:AppThunkDispatch) => {
    const response = await api_header.loginUser(data)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserTC())
    }
    return response
}
export const setLogOutUserTC = () => (dispatch: AppDispatch) => {
    api_header.logOutUser().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setLogOutUserDataAC())
        }
    })
}