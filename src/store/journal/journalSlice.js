import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState: initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload);
            state.isSaving = false;

        },
        setActiveNote: (state, { payload }) => {
            state.messageSaved = "";
            state.active = payload;
        },
        setNotes: (state, { payload }) => {
            state.notes = payload;
        },
        setSaving: (state) => {
            state.messageSaved = '',
                state.isSaving = true;
            //TODO: Error Message
        },
        afterUpdateNote: (state, { payload }) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === payload.id) {
                    return payload;
                }
                return note;
            });
            state.messageSaved = `${payload.title} successfully updated`;
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },

        clearNotesLogout: (state, { payload }) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;

        },
        deleteNoteById: (state, { payload }) => {
            state.notes = state.notes.filter(note => note.id !== payload)
            state.active = null;
            state.messageSaved = `Note deleted successfully`;
        }
    }
})

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    afterUpdateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNotesLogout } = journalSlice.actions;