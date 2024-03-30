import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: 'Checking', //? 'Checking' - 'Not-Authenticated' - 'Authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

//! createSlice, allow us define/create an slice of the state of Redux in one place.
//? An Slice, is a specific portion(slice) of the Application State which includes
//? It's own reducers and associated actions.

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    //? Reducers define how the slice state changes in response to actions.
    //* Redux Toolkit allows us to define reducers in an easy way using functions
    //* called "CASE REDUCERS"
    //! Which are simply objects where the keys are the actions names, and the values are
    //! functions which updates the state.
    reducers: {
        //TODO: Redux Toolkit allows us to write "mutating" Logic in reducers.
        // It doesn't actually mutate the state because it uses the Immer Library,
        // which detects changes to ad "draft state" and produces a brand new
        // immutable state based off those changes
        login: (state, { payload }) => {
            state.status = 'Authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'Not-Authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkCredentials: (state) => {
            state.status = 'Checking';
        }

    }
})

export const { login, logout, checkCredentials } = authSlice.actions;