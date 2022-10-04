import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const postData = async (data, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/postData`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default postData;
