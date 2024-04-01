import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";
import { firebaseDB } from "../../../src/firebase/config";

describe('Tests on Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should create a new Blank Note', async () => {
        const uid = "TEST-UID";
        getState.mockReturnValue({ auth: { uid } })

        await startNewNote()(dispatch, getState)

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());

        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: expect.any(Array),
        }));

        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: expect.any(Array),
        }));

        //! Delete firebase
        const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));

        await Promise.all(deletePromises);



    }, 10000)

})
