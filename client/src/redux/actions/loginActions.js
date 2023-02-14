import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_PENDING,
} from "../types/loginTypes";
import axios from "axios";
import { URL_BACK } from "../../config";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

export const loginUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
      const json = await axios.post(`${URL_BACK}/auth/login`, payload);
      // console.log("LOGIN: entró al try");
      // console.log("LOGIN: entró al SUCCESS");
      AsyncStorage.setItem("userData", JSON.stringify(json.data.data));
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: json.data.data });
    } catch (e) {
      // console.log("LOGIN: entró al REJECTED" + e);
      return dispatch({ type: LOGIN_USER_REJECTED, payload: e });
    }
  };
};

export const logoutUser = () => {
  return async function (dispatch) {
    AsyncStorage.removeItem("userData");
    dispatch({ type: LOGOUT_USER });
  };
};
