import axios from "../config/axios";

const courseApi = {};

courseApi.getCourse = (courseId) => axios.get(`/course/${courseId}`);

courseApi.newCourse = (body) => axios.post("/course/new-course", body);

export default courseApi;
