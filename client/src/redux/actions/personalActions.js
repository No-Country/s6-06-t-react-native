import {
  EDIT_PERSONAL_INFO_PENDING,
  EDIT_PERSONAL_INFO_REJECTED,
  EDIT_PERSONAL_INFO_SUCCESS,
} from "../types/personalTypes";

export const editPersonalInfo = (payload, token) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_PERSONAL_INFO_PENDING });
    try {
      // console.log("EDIT USER: entró al try");
      const { data } = await axios.put(
        `${URL_BACK}/profile/edit/personal`,
        {
          headers: {
            "x-token": `${token}`,
          },
        },
        payload
      );
      AsyncStorage.setItem("userData", JSON.stringify(data.data));
      return dispatch({ type: EDIT_PERSONAL_INFO_SUCCESS, payload: data.data });
    } catch (e) {
      // console.log("EDIT USER: entró al REJECTED " + e);
      return dispatch({ type: EDIT_PERSONAL_INFO_REJECTED, payload: e });
    }
  };
};
