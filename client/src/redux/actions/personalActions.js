import {
  EDIT_PERSONAL_INFO_PENDING,
  EDIT_PERSONAL_INFO_REJECTED,
  EDIT_PERSONAL_INFO_SUCCESS,
} from "../types/personalTypes";

export const editPersonalInfo = (payload, token) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_PERSONAL_INFO_PENDING });
    try {
      console.log("EDIT PERSONAL TRY");
      const { data } = await axios.put(
        `${URL_BACK}/profile/edit/personal`,
        {
          headers: {
            "x-token": `${token}`,
            "Content-Type": "application/json",
          },
        },
        payload
      );
      console.log("EDIT PERSONAL SUCCESS");

      return dispatch({ type: EDIT_PERSONAL_INFO_SUCCESS, payload: data.data });
    } catch (e) {
      console.log("EDIT PERSONAL REJECTED");

      return dispatch({ type: EDIT_PERSONAL_INFO_REJECTED, payload: e });
    }
  };
};
