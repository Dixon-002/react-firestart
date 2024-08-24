import * as types from "../constants/authConstants";

const initialState = {
    userData: null,
    userError: null,
    successMessage: null,
    signInError: null,
    signUpError: null,
    resetPasswordError: null
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case types.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: payload ? payload : null,
                userError: null
            };
        case types.SET_USER_DATA_FAIL:
            return {
                ...state,
                userData: null,
                userError: payload
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                userData: payload,
                userError: null,
                signUpError: null
            };
        case types.SIGNUP_FAIL:
            return {
                ...state,
                userData: null,
                signUpError: payload
            };
        case types.SIGNIN_SUCCESS:
            return {
                ...state,
                userData: payload,
                userError: null,
                signInError: null
            };
        case types.SIGNIN_FAIL:
            return {
                ...state,
                userData: null,
                signInError: payload
            };
        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                successMessage: payload
            };
        case types.RESET_PASSWORD_FAIL:
            return {
                ...state,
                resetPasswordError: payload
            };
        case types.LOGOUT:
            return {
                ...state,
                userData: null,
                userError: null,
            };
        case types.CLEAR_MESSAGE:
            return {
                ...state,
                successMessage: null,
                signInError: null,
                signUpError: null,
                resetPasswordError: null
            };
        default:
            return state;
    }
};

export default authReducer;