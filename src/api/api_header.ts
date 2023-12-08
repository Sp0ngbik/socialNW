import {instanceAxios} from "./axios_instances";
import {T_LoginForm} from "../components/Login/LoginForm";

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
    },
    loginUser(data: T_LoginForm) {
        return instanceAxios.post('auth/login', data)
    },
    logOutUser() {
        return instanceAxios.delete('auth/login')
    }
}