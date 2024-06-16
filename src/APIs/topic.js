import axios from "../config/axios";

const topicApi = {};

topicApi.createTopics = (topicInfo) => axios.post("/topic/new", topicInfo);

export default topicApi;
