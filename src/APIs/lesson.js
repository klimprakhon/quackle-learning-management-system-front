import axios from "../config/axios";

const lessonApi = {};

lessonApi.createLessons = (body) => axios.post("/lesson/new", body);

export default lessonApi;
