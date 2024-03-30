import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async (email, password, displayName) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(firebaseAuth.currentUser, { displayName: displayName });
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        // console.error(error);
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}
export const signInWithEmailPassword = async (email, password) => {
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { displayName, photoURL, uid } = resp.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    return await firebaseAuth.signOut();
}