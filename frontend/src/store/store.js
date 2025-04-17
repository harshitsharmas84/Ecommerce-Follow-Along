import { configureStore } from "@reduxjs/toolkit";

// Initial state with userEmail as null
const initialState = {
  userEmail: null,
};

// User reducer to handle email state changes
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_EMAIL":
      return {
        ...state,
        userEmail: action.payload,
      };
    case "CLEAR_USER_EMAIL":
      return {
        ...state,
        userEmail: null,
      };
    default:
      return state;
  }
};

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
