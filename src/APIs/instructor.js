import axios from "../config/axios";

const instructorApi = {};

instructorApi.getAll = () => axios.get("/instructor/all");

export default instructorApi;
