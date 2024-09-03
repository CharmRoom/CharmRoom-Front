import Api from "./Api";

const BoardApi = {};
const prefix = "/api/board";

BoardApi.getInfo = (boardId) => Api.get(`${prefix}/info/${boardId}`);

BoardApi.getArticleList = (boardId) => Api.get(`${prefix}/${boardId}`);

BoardApi.getArticleList = ({ boardId, page, size }) => Api.get(`${prefix}/${boardId}?page=${page}&size=${size}`)
BoardApi.getArticleList = ({boardId, size}) => Api.get(`${prefix}/${boardId}?size=${size}`)

export default BoardApi;