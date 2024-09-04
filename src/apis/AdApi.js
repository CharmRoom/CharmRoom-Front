import Api from "./Api";

const AdApi = {};
const prefix = "/api/ad";

AdApi.getAll = () => Api.get(prefix + "/all");

export default AdApi;