import { objectToForm } from "../utils/CharmroomUtil";
import Api from "./Api";

const AuthApi = {};
const prefix = "/api/auth";

AuthApi.signup = ({ username, password, rePassword, email, nickname }) => {
    const user = objectToForm({ username, password, rePassword, email, nickname });
    return Api.post(prefix + '/signup', user);
}

AuthApi.login = ({ username, password }) => {
    const user = objectToForm({username, password});
    return Api.post(prefix + '/login', user);
}
AuthApi.logout = () => Api.post(prefix + '/logout');
AuthApi.reissue = () => Api.post(prefix + '/reissue');


export default AuthApi;