import axios, {AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders, AxiosStatic, Method} from "axios";
import LIST_API from "./list.api";

class ServerRequest {
    private SERVER_ADDRESS: string = "http://172.20.10.4:5000/api/v1";
    private headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("userToken")
    };

    private req = (method: Method, url: string, data?: any): Promise<AxiosStatic> => {
        const reqConf: AxiosRequestConfig = {
            baseURL: this.SERVER_ADDRESS,
            url,
            method,
            headers: this.headers,
            data
        };

        return axios(reqConf);
    }

    public registerUser = (data: any): Promise<AxiosStatic> => {
        return this.req("POST", LIST_API.REGISTER, data);
    }

    public loginToken = (): Promise<AxiosStatic> => {
        return this.req("POST", LIST_API.GET_TOKEN);
    }

    public userInfo = (): Promise<AxiosStatic> => {
        return this.req("GET", LIST_API.USER_INFO);
    }
}

export default new ServerRequest();