const initialState = {
  cases: [],
  contacts: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CASES":
      return {
        ...state,
        cases: action?.payload,
      };
    case "GET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
