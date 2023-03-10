import {
  EDIT_PERSONAL_INFO_PENDING,
  EDIT_PERSONAL_INFO_REJECTED,
  EDIT_PERSONAL_INFO_SUCCESS,
  UPDATE_IMG_USER,
} from "../types/personalTypes";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
};

export const personalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_PERSONAL_INFO_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
        token: null,
      };
    case EDIT_PERSONAL_INFO_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
        token: null,
      };
    case EDIT_PERSONAL_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        token: payload.token,
        error: null,
      };
    case UPDATE_IMG_USER:
      return {
        ...state,
        user: {
          ...state.user,
          img_avatar: payload,
        },
      };

    default:
      return { ...state };
  }
};
