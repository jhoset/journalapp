import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { firebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {


    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { uid, email, displayName, photoUrl } = user;
            dispatch(login({ uid, email, displayName, photoUrl }))
            dispatch(startLoadingNotes())
        });

    }, [])

    return {
        status
    }
}
