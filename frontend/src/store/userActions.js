// Action to set the user's email in the global state
export const setEmail = (email) => {
  return {
    type: "SET_USER_EMAIL",
    payload: email,
  };
};

// Action to clear the user's email from the global state (for logout)
export const clearEmail = () => {
  return {
    type: "CLEAR_USER_EMAIL",
  };
};
