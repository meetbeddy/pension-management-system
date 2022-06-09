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
      `${baseUrl}/api/admin/confirm-rsa`,
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

export const addInvestment = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/admin/addinvestment`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addFund = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/admin/addfund`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const fetchInvestments = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/admin/fetchinvestments`,
      getConfig(getState)
    );
    dispatch({ type: "FETCH_INVESTMENTS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const fetchEmployees = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/admin/fetchemployees`,
      getConfig(getState)
    );
    dispatch({ type: "FETCH_EMPLOYEES", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addContribution = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/admin/addcontribution`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addRoi = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/admin/addroi`,
      data,
      getConfig(getState)
    );
    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};
