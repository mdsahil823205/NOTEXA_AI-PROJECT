import axios from "axios";
import { serverUrl } from "../App.jsx";
import { setUserData } from "../redux/userSlice.js";

export const fetchCurrentUserapi = async (dispatch) => {
  try {
    const result = await axios.get(`${serverUrl}/api/user/currentUser`, {
      withCredentials: true,
    });

    dispatch(setUserData(result.data));

  } catch (error) {
    console.error("Error fetching current user:", error?.response?.data || error.message);
  }
};

export const generateNotesApi = async (payload) => {
  try {
    const result = await axios.post(
      `${serverUrl}/api/notes/generate-notes`,
      payload,
      {
        withCredentials: true,
      }
    );

    return result.data;

  } catch (error) {
    console.error("Error generating notes:", error?.response?.data || error.message);
    throw error;
  }
};
