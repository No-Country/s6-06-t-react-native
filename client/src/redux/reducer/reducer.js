import { LOG_IN ,SIGN_IN , SIGN_OUT,} from "../actions/actionsTypes";

const initialState = {
    stateGlobal: false,
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN :
            return {
                ...state,
                stateGlobal: action.payload,
            }
        case SIGN_IN: 
            return {
                ...state,
                stateGlobal: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                stateGlobal: false,
            }
        default:
            return state;
    }
}
export default rootReducer;