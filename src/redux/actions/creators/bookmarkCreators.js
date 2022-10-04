import { GET_DATA, DELETE, POST_DATA } from "../types/bookmarkApi";
// import axios from "../../../api/baseaxios";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BASE_URL;

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export const makeRequest = (limit = 10, page) => {
  console.log(limit, "limit", page, "page");
  return (dispatch) => {
    axios
      .get(`${BACKEND_URL}/bookmarks?limit=${limit}&page=${page}`)
      .then((res) => {
        console.log(res.data, "res.data.bookmark");
        dispatch(getData(res.data));
      });
  };
};
