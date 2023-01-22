import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    isAuthenticated: false,
    user:null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            console.log(action);
            state.isAuthenticated = true;
            state.user = {
                username: action.payload.username,
                password: action.payload.password
            };
 },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null
        }
    }

});
export const authActions = authSlice.actions;
export default authSlice;