import axios from "axios";
import { baseUrl } from "../config";

const config = {
  headers: {
    Content_Type: "application/json",
  },
};
export const signIn = (formdata) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/signin`,
      formdata,
      config
    );

    dispatch({ type: "AUTH_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_ERROR_MSG", payload: error?.response?.data });
  }
};

export const signUp = (formdata) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/api/user/signup`, formdata);

    dispatch({ type: "AUTH_SUCCESS", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
