import axios from "axios";
import { URL_BACK } from "../../config";
import {
  EDIT_PERSONAL_INFO_PENDING,
  EDIT_PERSONAL_INFO_REJECTED,
  EDIT_PERSONAL_INFO_SUCCESS,
} from "../types/personalTypes";
import { AsyncStorage } from "react-native";

export const editPersonalInfo = (payload, token) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_PERSONAL_INFO_PENDING });
    try {
      // console.log("EDIT PERSONAL TRY");
      const { data } = await axios.put(
        `${URL_BACK}/profile/edit/information`,
        payload,
        {
          headers: {
            "x-token": `${token}`,
          },
        }
      );
      // console.log("EDIT PERSONAL SUCCESS");
      AsyncStorage.mergeItem("userData", JSON.stringify(data.data));
      return dispatch({ type: EDIT_PERSONAL_INFO_SUCCESS, payload: data.data });
    } catch (e) {
      // console.log("EDIT PERSONAL REJECTED  " + e);

      return dispatch({ type: EDIT_PERSONAL_INFO_REJECTED, payload: e });
    }
  };
};

export const getUserData = async (setState) => {
  try {
    let userData = await AsyncStorage.getItem("userData");
    userData = JSON.parse(userData);
    if (userData) {
      setState(userData);
    }
  } catch (e) {
    console.log(`getUserData Error: ${e}`);
  }
};
