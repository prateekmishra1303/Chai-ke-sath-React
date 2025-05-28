import { createSlice } from  '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        Login: (state, action) => {
            state.state = true;
            state.userData = action.payload.userData;
        },
        Logout: (state) => {
            state.status = false;
            state.userData= null;
        }
    }

})

export const {Login, Logout} = authSlice.actions;
export default authSlice.reducer;