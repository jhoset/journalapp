import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, afterUpdateNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote())
        const { uid } = getState().auth;
        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        const newDoc = doc(collection(firebaseDB,
            `${uid}/journal/notes`));

        const resp = await setDoc(newDoc, newNote)
        newNote.id = newDoc.id;
        // console.log({ newDoc, resp });

        // dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error(`Missing USER uid`);

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const startSavingNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: currentNote } = getState().journal;
        const noteToSave = { ...currentNote }
        delete noteToSave.id;

        const docRef = doc(firebaseDB, `${uid}/journal/notes/${currentNote.id}`);
        await setDoc(docRef, noteToSave, { merge: true });
        dispatch(afterUpdateNote(currentNote))

    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const imgUrls = await Promise.all(fileUploadPromises);
        console.log(imgUrls)
        dispatch(setPhotosToActiveNote(imgUrls))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal;

        const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));
    }
}