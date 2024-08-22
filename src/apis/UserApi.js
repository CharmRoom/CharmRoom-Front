import Api from "./Api";

const UserApi = {};
const prefix = '/api/user';

UserApi.info = () => Api.get(prefix);

export default UserApi;