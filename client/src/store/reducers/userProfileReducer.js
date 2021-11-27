const initState = {
  profile: {},
  savings: [],
  loans: [],
  refLink: "",
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        profile: action?.payload,
      };

    default:
      return state;
  }
};
export default userProfileReducer;
