import {RootState} from "../reduxStore";

export const getUsers = (state: RootState) => {
    return state.usersPage.items
}
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}
export const getActivePage = (state: RootState) => {
    return state.usersPage.activePage
}
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}


