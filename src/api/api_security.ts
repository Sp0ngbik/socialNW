import {instanceAxios} from "./axios_instances";

export class Api_security {
    static getCaptcha() {
        return instanceAxios.get<{ url: string }>('security/get-captcha-url')
    }
}