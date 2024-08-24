import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// console.log(Cookies.get('tagspice'))
const initialState = {
    userData : Cookies.get('tagspice')?JSON.parse(Cookies.get('tagspice')):{}
}

export const todoSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        loginUser: (state, action) => {
            state.userData = action.payload
        },
        logoutUser: (state, action) => {
            state.userData = {}
            Cookies.remove('tagspice')
        }
    }
})

export const {loginUser, logoutUser} = todoSlice.actions

export default todoSlice.reducer