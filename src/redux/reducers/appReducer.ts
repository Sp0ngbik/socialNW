import {AppDispatch} from "../reduxStore";
import {setAuthUserTC} from "./authReducer";

type T_AppReducer = {
    appInitialized: boolean
}

const initialState: T_AppReducer = {
    appInitialized: false
}

type T_InitializedApp = ReturnType<typeof initializedAppAC>
type T_MainAppReducer = T_InitializedApp

export const app_Reducer = (state = initialState, action: T_MainAppReducer): T_AppReducer => {
    switch (action.type) {
        case "INITIALIZED_APP": {
            return {...state, appInitialized: true}
        }
        default:
            return state
    }
}


export const initializedAppAC = () => {
    return {type: "INITIALIZED_APP"} as const
}

export const appInitializeTC = () => async (dispatch: AppDispatch) => {
    let userResult = dispatch(setAuthUserTC());
    Promise.all([userResult]).then(() => {
        dispatch(initializedAppAC())
    })
}


export default app_Reducer