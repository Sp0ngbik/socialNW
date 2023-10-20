import {combineReducers, legacy_createStore} from "redux";
import {dialogReducer} from "./reducers/dialogReducer";
import {profileReducer} from "./reducers/profileReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer
})
export const reduxStore = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
