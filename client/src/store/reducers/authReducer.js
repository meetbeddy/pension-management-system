const initialState = {
  user: JSON.parse(localStorage.getItem("profile")),

  errors: {},
  success: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, user: action?.payload };
    case "LOGOUT":
      localStorage.removeItem("profile");
      return { ...(state = { user: null }) };
    default:
      return state;
  }
};

export default authReducer;
