import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BASE_URL;

const axiosbase = () => {
  return axios.create(BACKEND_URL).then((res) => res.data);
};

export default axiosbase;
