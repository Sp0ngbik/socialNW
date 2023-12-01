import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {dialogReducer} from "./reducers/dialogReducer";
import {profileReducer} from "./reducers/profileReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {auth_reducer} from "./reducers/authReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    authReducer: auth_reducer
})
export const reduxStore = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
// @ts-ignore
window.store = reduxStore
