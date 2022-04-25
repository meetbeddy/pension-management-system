import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const rsaRequest = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/admin/rsa-request`,
      getConfig(getState)
    );
    dispatch({ type: "RSA_REQUEST", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const confirmRSA = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.put(
      `${baseUrl}/api/admin/rsa-request`,
      {
        id,
      },

      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};
