import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {dialogReducer} from "./reducers/dialogReducer";
import {profileReducer} from "./reducers/profileReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {auth_reducer} from "./reducers/authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {app_Reducer} from "./reducers/appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    authReducer: auth_reducer,
    appReducer: app_Reducer
})
export const reduxStore = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>
// @ts-ignore
window.store = reduxStore
