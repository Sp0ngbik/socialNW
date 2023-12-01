import {T_UserProfileBody} from "../redux/reducers/profileReducer";
import {instanceAxios} from "./axios_instances";

export type T_ProfileResponse = {
    resultCode: number,
    messages: string[],
    data: {}
}
export const api_profile = {
    getUser(userId: string) {
        return instanceAxios.get<T_UserProfileBody>(`profile/${userId}`)
    },
    getStatus(useId: string) {
        return instanceAxios.get(`profile/status/${useId}`)
    },
    updateStatus(status: string) {
        return instanceAxios.put<T_ProfileResponse>(`profile/status/`, {status})
    }
}

