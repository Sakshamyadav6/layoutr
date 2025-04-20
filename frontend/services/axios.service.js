import axios from "axios";
import { errorToast } from "./toast.service";

export const registerUser = async (uri, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data
    );
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
export const loginUser = async (uri, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data
    );
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
export const createProject = async (uri, data, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
export const getProject = async (uri, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
export const deleteProject = async (uri, token) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/${uri} `,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    errorToast(error.response.data.message);
  }
};
export const getProjectById = async (uri, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
export const updateProjectById = async (uri, data, token) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    // console.log(error);
    errorToast(error.response.data.message);
  }
};
