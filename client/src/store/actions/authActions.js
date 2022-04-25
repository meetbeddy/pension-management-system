import axios from "axios";
import { baseUrl, getConfig } from "../config";

const config = {
  headers: {
    Content_Type: "application/json",
  },
};
export const signIn = (formdata) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/api/user/signin`, formdata);
    console.log(res.data);
    dispatch({ type: "AUTH_SUCCESS", payload: res.data });
  } catch (error) {
    console.log(error);
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

export const getProfile = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/user/getprofile`,
      getConfig(getState)
    );
    console.log(res);
    dispatch({ type: "FETCH_USER", payload: res?.data });
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
