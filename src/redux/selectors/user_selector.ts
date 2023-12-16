import {RootState} from "../reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state: RootState) => {
    return state.usersPage.items
}

export const getUsersSuper = createSelector([getUsers],
    (users) => {
        // debugger
        return users.filter(el => true)
    })

export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}
export const getActivePage = (state: RootState) => {
    return state.usersPage.activePage
}
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}


