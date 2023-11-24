import {instanceAxios} from "./axios_instances";

type T_ResponseAuthMe = {
    resultCode: number,
    messages: string[],
    data: {
        id: number,
        email: string,
        login: string
    }
}
export const api_header = {
    authUser() {
        return instanceAxios.get<T_ResponseAuthMe>('auth/me')
    }
}