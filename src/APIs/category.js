import axios from "../config/axios";

const categoryApi = {};

categoryApi.getAllCategory = () => axios.get("/category/all");
categoryApi.getSubcategory = (categoryId) =>
  axios.get(`/category/${categoryId}`);

export default categoryApi;
