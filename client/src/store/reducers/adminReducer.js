const initialState = {
  rsaRequests: [],
  investments: [],
  employees: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RSA_REQUEST":
      return {
        ...state,
        rsaRequests: action?.payload,
      };
    case "FETCH_INVESTMENTS":
      return {
        ...state,
        investments: action?.payload,
      };
    case "FETCH_EMPLOYEES":
      return {
        ...state,
        employees: action?.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
