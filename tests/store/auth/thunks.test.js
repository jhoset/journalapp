
import { logoutFirebase, signInWithEmailPassword, signInWithGoogle } from "../../../src/firebase/auth-providers";
import { checkCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuth, startEmailAndPasswordSignIn, startGoogleSignIn, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixture";


jest.mock('../../../src/firebase/auth-providers')

describe('Tests on AuthThunks', () => {


    const dispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('should call checkingCredentials', async () => {


        const value = await checkingAuth()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkCredentials());

    })

    test('startGoogleSignIn should call checkingCredentials & login - Success', async () => {

        const loginData = { ok: true, ...demoUser };

        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))


    })

    test('startGoogleSignIn should call checkingCredentials & logout - Error', async () => {

        const loginData = { ok: false, errorMessage: 'Google Error' };

        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData))


    })

    test('startEmailAndPasswordSignIn should call checkCredentials & login - Success', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' }

        await signInWithEmailPassword.mockResolvedValue(loginData);
        await startEmailAndPasswordSignIn(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));


    })


    test('startEmailAndPasswordSignIn should call checkCredentials & logout - Error', async () => {
        const loginData = { ok: false, errorMessage: 'Credentials Error' };
        const formData = { email: demoUser.email, password: '123456' }

        await signInWithEmailPassword.mockResolvedValue(loginData);
        await startEmailAndPasswordSignIn(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: loginData.errorMessage }));
    })

    test('startLogout should call logoutFirebase, clearNotes, & logout', async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout())

    })





})
