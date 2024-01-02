import {AppDispatch, AppThunk, AppThunkDispatch} from "../reduxStore";
import {Api_header} from "../../api/api_header";
import {T_LoginForm} from "../../components/Login/LoginForm";
import {Api_security} from "../../api/api_security";

export type T_AuthReducerInitial = {
    id: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean,
    captcha: null | string
}

export type T_ResponseAuthUser = Omit<T_AuthReducerInitial, 'isFetching' | 'isAuth' | 'loginError' | 'captcha'>

const initialState: T_AuthReducerInitial = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
    captcha: null
}


type T_SetUserData = ReturnType<typeof setAuthUserDataAC>
type T_SetUserLogOut = ReturnType<typeof setLogOutUserDataAC>
type T_SetCaptcha = ReturnType<typeof setCaptcha>
type T_MainType = T_SetUserData | T_SetUserLogOut |T_SetCaptcha

export const auth_reducer = (state = initialState, action: T_MainType): T_AuthReducerInitial => {
    switch (action.type) {
        case "auth/SET_USER_DATA": {
            return {...state, ...action.userData, isAuth: true}
        }
        case "auth/SET_USER_LOGOUT": {
            return {...state, login: '', email: '', id: 0, isAuth: false}
        }

        case "auth/CAPTCHA": {
            return {...state, captcha: action.captchaURL}
        }
        default:
            return state
    }
}


export const setAuthUserDataAC = (userData: T_ResponseAuthUser) => {
    return {type: "auth/SET_USER_DATA", userData} as const
}

export const setCaptcha = (captchaURL: string) => {
    return {type: 'auth/CAPTCHA', captchaURL} as const
}

export const setLogOutUserDataAC = () => {
    return {type: "auth/SET_USER_LOGOUT"} as const
}

export const setAuthUserTC = (): AppThunk => async (dispatch: AppDispatch) => {
    const res = await Api_header.authUser();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(res.data.data));
    }
    return res

}
export const setLoginUserTC = (data: T_LoginForm) => async (dispatch: AppThunkDispatch) => {
    const response = await Api_header.loginUser(data)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserTC())
    }else if(response.data.resultCode === 10){
        dispatch(getCaptchaURL())
    }
    return response
}

export const getCaptchaURL = (): AppThunk => async (dispatch) => {
    const response = await Api_security.getCaptcha()
    const captcha = response.data.url
    dispatch(setCaptcha(captcha))
}

export const setLogOutUserTC = () => (dispatch: AppDispatch) => {
    Api_header.logOutUser().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setLogOutUserDataAC())
        }
    })
}

