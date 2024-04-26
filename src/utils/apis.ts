import axios, {Axios, AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders, AxiosStatic, Method} from "axios";
import LIST_API from "./list.api";

class ServerRequest {
    // private SERVER_ADDRESS: string = process.env.SERVER_ADDR || "http://172.20.10.4:5000/api/v1";
    private SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDR;

    private headers = {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("userToken")
    };

    private req = (method: Method, url: string, data?: any): Promise<Axios> => {
        const reqConf: AxiosRequestConfig = {
            baseURL: process.env.REACT_APP_SERVER_ADDR,
            url,
            method,
            headers: this.headers,
            data
        };

        console.log(process.env);
        console.log(reqConf);

        return axios(reqConf);
    }

    public registerUser = (data: any): Promise<Axios> => {
        return this.req("POST", LIST_API.REGISTER, data);
    }

    public loginToken = (data: any): Promise<Axios> => {
        return this.req("POST", LIST_API.GET_TOKEN, data);
    }

    public userInfo = (): Promise<Axios> => {
        return this.req("GET", LIST_API.USER_INFO);
    }
}

export default new ServerRequest();