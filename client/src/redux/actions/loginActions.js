import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
} from "../types/loginTypes";
import { URL_BACK } from "../../config";

export const loginUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
      const json = await axios.post(`${URL_BACK}/auth/login`, payload);
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: json.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: LOGIN_USER_REJECTED });
    }
  };
};
