import {T_UserProfileBody} from "../redux/reducers/profileReducer";
import {instanceAxios} from "./axios_instances";

export const api_profile = {
    getUser(userId:string) {
       return  instanceAxios.get<T_UserProfileBody>(`profile/${userId}`)
    }
}