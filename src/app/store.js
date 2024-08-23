import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/login/loginSlice"

export const store = configureStore({
    reducer: loginReducer
})