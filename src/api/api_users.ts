import {T_GetUsers} from "../redux/reducers/usersReducer";
import {instanceUsersAxios} from "./axios_instances";

export class Api_users {
    static async getUsers(pageSize: number, activePage: number) {
        const res = await instanceUsersAxios.get<T_GetUsers>(`users?page=${activePage}&count=${pageSize}`, {withCredentials: true});
        return res.data;
    }

    static followUser(userId: number) {
        return instanceUsersAxios.post(`follow/${userId}`, {})
    }

    static unFollowUser(userId: number) {
        return instanceUsersAxios.delete(`follow/${userId}`)
    }
}