import { logoutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase/auth-providers";
import { clearNotesLogout } from "../journal";
import { checkCredentials, login, logout } from "./authSlice"


//! In Redux, a thunk is a function which wraps an action.
//? This allows us to perform async operations and access to the Redux State
//? inside an action.

//* Thunks commonly are being used to handle async operations, 
//* like HTTP requests or Database accesses 
//* before DISPATCH an action to update the REDUX STATE
export const checkingAuth = (email, password) => {
    return async (dispatch) => {

        dispatch(checkCredentials());
        console.log('Checking credentials...', { email, password });

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) {
            dispatch(logout(result))
            return;
        }
        dispatch(login(result));

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName: pDisplayName }) => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        const { ok, uid, photoURL, displayName, errorMessage } = await registerUserWithEmailPassword(email, password, pDisplayName)
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startEmailAndPasswordSignIn = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        const { ok, uid, photoURL, displayName, errorMessage } = await signInWithEmailPassword(email, password);
        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()

        dispatch(clearNotesLogout());

        dispatch(logout());
    }
}