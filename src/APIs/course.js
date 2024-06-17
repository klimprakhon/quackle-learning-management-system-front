import axios from "../config/axios";

const courseApi = {};

courseApi.getCourse = (courseId) => axios.get(`/course/${courseId}`);

courseApi.newCourse = (body) => axios.post("/course/new-course", body);

courseApi.updateCourse = (courseId, body) =>
  axios.patch(`/course/${courseId}`, body);

courseApi.allCourse = () => axios.get("/course/all");

export default courseApi;
