import axios from "axios";
import { baseUrl } from "../config";

export const submitCase = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`${baseUrl}/api/user/submitcase`, data);

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

// export const submitConfirmedCase = (data) => async (dispatch, getState) => {
//   try {
//     const res = await axios.post(
//       `http://localhost:5000/api/user/submit-confirmed-case`,
//       data,
//       getConfig(getState)
//     );
//     dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
//   } catch (err) {
//     dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
//   }
// };
