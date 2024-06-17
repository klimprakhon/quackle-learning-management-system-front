import axios from "../config/axios";

const enrollmentApi = {};

enrollmentApi.createEnrollment = (body) => axios.post("/enrollment/new", body);

enrollmentApi.checkEnrollment = (body) => axios.get("/enrollment/check", body);

export default enrollmentApi;
