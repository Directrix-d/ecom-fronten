import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "login",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        status:false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.status = true;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;

export const loginhandler = async (dispatch, user) => {
    try {
        dispatch(loginStart()); // Dispatch the loginStart action before making the request

        const res = await axios.post("http://localhost:3300/auth/login", user);

        dispatch(loginSuccess(res.data)); // Dispatch the loginSuccess action with the response data
    } catch (err) {
        dispatch(loginFailure());
    }
};
