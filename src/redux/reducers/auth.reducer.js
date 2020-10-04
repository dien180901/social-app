import * as types from "redux/constants/auth.constants"

const initialState = {
    user: {},
    isAuthenticated: false,
    loading: false

}
const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.REGISTER_REQUEST:
            return { ...state, loading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, loading: false };
        case types.REGISTER_FAILURE:
            return { ...state, loading: false };
        case types.LOGIN_REQUEST:
            return { ...state, loading: true };
        case types.LOGIN_SUCCESS:
            localStorage.setItem("accessToken", payload.accessToken);
            return {
                ...state,
                user: payload.user,
                accessToken: payload.accessToken,
                loading: false,
                isAuthenticated: true,
            };
        case types.LOGIN_FAILURE:
            return { ...state, loading: false, isAuthenticated: false };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                accessToken: null,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}
export default authReducer;