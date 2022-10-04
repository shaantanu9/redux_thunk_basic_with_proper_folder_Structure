import { INCREMENT } from "../actions/types";

const intialState = {
  counter: 0,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

export default reducer;
