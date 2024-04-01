import { authSlice, checkCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixture";

describe('Tests on authSlice', () => {
    test('Should return initialState and be called auth', () => {


        expect(authSlice.name).toBe('auth');

        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);

    })

    test('Should perform authentication', () => {


        const state = authSlice.reducer(initialState, login(demoUser))

        expect(state).toEqual({
            status: 'Authenticated', //? 'Checking' - 'Not-Authenticated' - 'Authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        })

    })

    test('Should perform logout', () => {

        const state = authSlice.reducer(authenticatedState, logout())
        expect(state).toEqual({
            status: 'Not-Authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })


    })

    test('Should perform logout and show error message', () => {
        const errorMessage = 'Something went wrong'

        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }))
        expect(state).toEqual({
            status: 'Not-Authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })

    })

    test('Should change state to Checking', () => {
        const state = authSlice.reducer(initialState, checkCredentials(demoUser))

        expect(state.status).toBe('Checking');
    })


})
