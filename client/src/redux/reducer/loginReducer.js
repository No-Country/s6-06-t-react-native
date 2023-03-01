import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  CAMBIADOR,
} from "../types/loginTypes";
import {UPDATE_IMG_USER} from "../types/loginTypes";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
  variable: false,
};


export const loginReducer = (state = initialState, { type, payload }) => {
  console.log('entro a login')
  switch (type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
        token: null,
      };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
        token: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        token: payload.token,
        error: null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
        error: null,
      };
      case UPDATE_IMG_USER:
        console.log('entro')
        return {
          ...state,
          user: {
            ...state.user,
            img_avatar : payload
          },
        };
    case CAMBIADOR:
      return {
        ...state,
        variable: payload,
      }
    default:
      return { ...state };
  }
};
