import { onAuthStateChanged, signOut } from "firebase/auth";
import * as api from "../api/authAPI";
import * as types from "../constants/authConstants";
import { auth } from "../api/firebase";
import { getUserDocument } from "../api/userAPI";

export const initializeAuth = () => async (dispatch) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const { error, data } = await getUserDocument(user.uid);

                if (error) {
                    dispatch({
                        type: types.SET_USER_DATA_FAIL,
                        payload: null,
                    });
                    resolve(null);
                };
                
                dispatch({
                    type: types.SET_USER_DATA_SUCCESS,
                    payload: data
                });
                resolve(data);
            } else {
                dispatch({
                    type: types.SET_USER_DATA_FAIL,
                    payload: null,
                });
                resolve(null);
            }
        }, reject);
    });
};

export const setUserData = (userData) => async (dispatch) => {
    dispatch({ type: types.LOGOUT, payload: userData });
};

export const setInitialAuthState = (navigate) => async (dispatch) => {
    await dispatch({ type: types.LOGOUT });
    navigate("/welcome");
};

export const signInAction = (formData, navigate) => async (dispatch) => {
    try {
        const email = formData.get('email');
        const password = formData.get('password');

        const { error, data } = await api.signIn(email, password);

        if (error) {
            dispatch({
                type: types.SIGNIN_FAIL,
                payload: error,
            });
        } else {
            dispatch({
                type: types.SIGNIN_SUCCESS,
                payload: data,
            });
    
            navigate("/");
        };
    } catch (error) {
        await dispatch({
            type: types.SIGNIN_FAIL,
            payload: types.ERROR_MESSAGE,
        });
        navigate("/");
    }
};

export const signUpAction = (formData, navigate) => async (dispatch) => {
    try {
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const password = formData.get('password');

        const payload = {
            full_name: fullName,
            email: email
        };

        const { error, data } = await api.signUp(email, password, payload);

        if (error) {
            dispatch({
                type: types.SIGNUP_FAIL,
                payload: error,
            });
        } else {
            dispatch({
                type: types.SIGNUP_SUCCESS,
                payload: data,
            });
    
            navigate("/");
        }
    } catch (error) {
        await dispatch({
            type: types.SIGNUP_FAIL,
            payload: types.ERROR_MESSAGE,
        });

        navigate("/signup");
    }
};

export const resetPasswordAction = (formData) => async (dispatch) => {
    try {
        const email = formData.get('email');

        const { error, data } = await api.resetPassword(email);

        if (error) {
            dispatch({
                type: types.RESET_PASSWORD_FAIL,
                payload: error
            });
        } else {
            dispatch({
                type: types.RESET_PASSWORD_SUCCESS,
                payload: data.message,
            });
        };
    } catch (error) {
        dispatch({
            type: types.RESET_PASSWORD_FAIL,
            payload: types.ERROR_MESSAGE
        });
    }
}

export const logoutAction = () => async (dispatch) => {
    signOut(auth);
    dispatch({ type: types.LOGOUT });
};

export const clearMessage = () => async (dispatch) => {
    dispatch({ type: types.CLEAR_MESSAGE });
};  