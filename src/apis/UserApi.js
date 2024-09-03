import Api from "./Api";

const UserApi = {};
const prefix = '/api/user';

UserApi.info = () => Api.get(prefix);
UserApi.feed = () => Api.get(`${prefix}/feed`);
export default UserApi;