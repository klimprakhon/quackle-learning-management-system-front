import axios from "../config/axios";

const enrollmentApi = {};

enrollmentApi.createEnrollment = (body) => axios.post("/enrollment/new", body);

export default enrollmentApi;
