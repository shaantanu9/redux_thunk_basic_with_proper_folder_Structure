import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default login;
