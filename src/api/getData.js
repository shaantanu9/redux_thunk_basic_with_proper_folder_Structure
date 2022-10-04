import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getData = async (token = null) => {
  console.log("inside getData");
  try {
    const response = await axios.get(`${BASE_URL}/bookmarks`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default getData;
