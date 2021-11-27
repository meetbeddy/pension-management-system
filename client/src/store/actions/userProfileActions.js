import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const fetchUserProfile = (user) => async (dispatch, getState) => {
  try {
    let res;
    if (user.user.accessLevel === 1) {
      res = await axios.get(
        `${baseUrl}/user/getuser/${user.user._id}`,
        getConfig(getState)
      );
      dispatch({ type: "FETCH_USER", payload: res?.data });
    } else {
      res = await axios.get(
        `${baseUrl}/admin/API/getadmin/${user.user._id}`,
        getConfig(getState)
      );
      dispatch({ type: "FETCH_USER", payload: res?.data });
    }
  } catch (error) {
    dispatch({ type: "AUTH_FAILURE", payload: error?.response?.data });
  }
};

export const updateUserProfile = (formdata) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/admin/API/updateprofile`,
      formdata,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: err?.response?.data,
    });
  }
};
