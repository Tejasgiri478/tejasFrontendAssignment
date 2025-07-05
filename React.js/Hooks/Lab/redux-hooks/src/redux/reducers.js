import { INCREMENT, DECREMENT, RESET } from "./actions";

// Initial state
const initialState = {
  counter: 0,
};

// Counter reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
