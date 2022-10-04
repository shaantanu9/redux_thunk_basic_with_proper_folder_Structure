import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const register = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default register;
