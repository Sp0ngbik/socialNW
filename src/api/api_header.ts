import {instanceAxios} from "./axios_instances";
import {T_LoginForm} from "../components/Login/LoginForm";
import {AxiosResponse} from "axios";

type T_ResponseAuthMe = {
    resultCode: number,
    messages: string[],
    data: {
        id: number,
        email: string,
        login: string
    }
}
export type T_ResponseLogin = {
    data: {
        userId: number,
    }
    messages: string[]
    resultCode: number
}

export class Api_header {
    static authUser() {
        return instanceAxios.get<T_ResponseAuthMe>('auth/me')
    }

    static loginUser(data: T_LoginForm) {
        return instanceAxios.post<T_ResponseLogin, AxiosResponse<T_ResponseLogin>>('auth/login', data)
    }

    static logOutUser() {
        return instanceAxios.delete('auth/login')
    }
}