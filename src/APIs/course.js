import axios from "../config/axios";

const courseApi = {};

courseApi.getCourse = (courseId) => axios.get(`/course/${courseId}`);

courseApi.newCourse = (body) => axios.post("/course/new-course", body);

courseApi.updateCourse = (courseId, body) =>
  axios.patch(`/course/${courseId}`, body);

courseApi.allCourse = () => axios.get("/course/all");

courseApi.getEnrolledCourse = (body) => axios.post("/course/enrolled", body);

courseApi.allDetails = (body) => axios.post("/course/details", body);

courseApi.deleteCourse = (courseId) => axios.delete(`/course/${courseId}`);

courseApi.getCoursesByCategory = (categoryName) =>
  axios.get(`/course/category/${categoryName}`);

export default courseApi;
