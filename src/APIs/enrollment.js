import axios from "../config/axios";

const enrollmentApi = {};

enrollmentApi.createEnrollment = (body) => axios.post("/enrollment/new", body);

enrollmentApi.checkEnrollment = (body) => axios.get("/enrollment/check", body);

enrollmentApi.getAllEnrollment = () => axios.get("/enrollment/all");

enrollmentApi.updateStatus = (body) => axios.patch("enrollment/status", body);

export default enrollmentApi;
