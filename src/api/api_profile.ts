import {T_UserProfileBody} from "../redux/reducers/profileReducer";
import {instanceAxios} from "./axios_instances";

export type T_ProfileResponse = {
    resultCode: number,
    messages: string[],
    data: {}
}

export class Api_profile {
    static getUser(userId: string) {
        return instanceAxios.get<T_UserProfileBody>(`profile/${userId}`)
    }

    static getStatus(useId: string) {
        return instanceAxios.get(`profile/status/${useId}`)
    }

    static updateStatus(status: string) {
        return instanceAxios.put<T_ProfileResponse>(`profile/status/`, {status})
    }

    static savePhoto(file: File) {
        return instanceAxios.put('/profile/photo', {image: file}, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}

