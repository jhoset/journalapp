import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal";


//! configureStore, is a function provided by Redux Toolkit
//! it is utilized to configure and create a store

//? Store in React-Redux is an centralized object that contains the state of the application
//? This use the design pattern "Redux" to handle the state in a predictable and efficient way.
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer
    }
})