import { GET_DATA } from "../actions/types";

const intialState = {
  bookmarks: [],
  totalPages: 0,
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        bookmarks: payload.bookmarks,
        totalPages: payload.totalPages,
      };
    default:
      return state;
  }
};

export default reducer;
