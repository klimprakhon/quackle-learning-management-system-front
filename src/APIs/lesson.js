import axios from "../config/axios";

const lessonApi = {};

lessonApi.createLessons = (lessonInfo) => axios.post("/lesson/new", lessonInfo);

export default lessonApi;
