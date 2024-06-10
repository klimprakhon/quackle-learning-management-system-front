import axios from "../config/axios";

const courseApi = {};

courseApi.getCourse = (courseId) => axios.get(`/course/${courseId}`);

export default courseApi;
