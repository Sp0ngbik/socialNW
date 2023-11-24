import {T_GetUsers} from "../redux/reducers/usersReducer";
import {instanceAxios} from "./axios_instances";

export class Api_users {
    static async getUsers(pageSize: number, activePage: number) {
        const res = await instanceAxios.get<T_GetUsers>(`users?page=${activePage}&count=${pageSize}`, {withCredentials: true});
        return res.data;
    }

    static followUser(userId: number) {
        return instanceAxios.post(`follow/${userId}`, {})
    }

    static unFollowUser(userId: number) {
        return instanceAxios.delete(`follow/${userId}`)
    }
}