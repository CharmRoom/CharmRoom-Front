import axios from "axios";
import SpringConstants from "../constants/SpringConstants";

const Api = axios.create();
Api.defaults.withCredentials = true;
Api.defaults.baseURL = SpringConstants.server;

export const setAccessToken = (token) => {
    if (!token) {
        Api.defaults.headers.common.Authorization = undefined;
    } else {
        Api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
}

export default Api;