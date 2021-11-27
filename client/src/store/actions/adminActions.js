import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const fetchCases = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/user/fetchcases`,
      getConfig(getState)
    );
    dispatch({ type: "GET_CASES", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const submitTestResult = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/testresult`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addCaseContact = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/addcontact`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const fetchContact = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/user/fetchcontact/${id}`,
      getConfig(getState)
    );
    dispatch({ type: "GET_CONTACTS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addFollowUpDetail = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/followup`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    dispatch(fetchCases());
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const editCase = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.put(
      `${baseUrl}/api/user/editcase`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    dispatch(fetchCases());
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const removeCase = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/api/user/removecase`,
      {
        headers: {
          Content_Type: "application/json",
        },
        data: {
          id,
        },
      },

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
