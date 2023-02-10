const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
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
      // REVISAR COMO VIENE EL PAYLOAD
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        error: null,
      };
    default:
      return { ...state };
  }
};
