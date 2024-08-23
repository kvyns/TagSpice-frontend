import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : {}
}

export const todoSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        loginUser: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const {loginUser} = todoSlice.actions

export default todoSlice.reducer