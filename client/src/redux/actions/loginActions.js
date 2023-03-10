import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../types/loginTypes";
import { UPDATE_IMG_USER } from "../types/loginTypes";
import axios from "axios";
import { URL_BACK } from "../../config";
import { AsyncStorage } from "react-native";

export const loginUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
      const { data } = await axios.post(`${URL_BACK}/auth/login`, payload);
      AsyncStorage.setItem("userData", JSON.stringify(data.data));
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: data.data });
    } catch (e) {
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

export const updateImgUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_IMG_USER,
      payload,
    });
  };
};
