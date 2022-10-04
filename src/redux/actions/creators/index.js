import { INCREMENT } from "../types";
import { makeRequest, getData } from "./bookmarkCreators";
export const addCounter = (increamentCount) => {
  return {
    type: INCREMENT,
    payload: increamentCount,
  };
};

export { makeRequest, getData };
