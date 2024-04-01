import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth"
import { startGoogleSignIn } from "../../../src/store/auth/thunks"
import { MemoryRouter } from "react-router-dom"
import { notAuthenticatedState } from "../../fixtures/authFixture"


const mockStartGoogleSignIn = jest.fn();
const mockStartEmailAndPasswordSignIn = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startEmailAndPasswordSignIn: ({email, password}) => {
        return () => mockStartEmailAndPasswordSignIn({email, password})
    },
}));


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}))


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },

    preloadedState: {
        auth: notAuthenticatedState
    }
})


describe('Tests on <LoginPage />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('Should display component correctly ', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);


    })


    test('Should call startGoogleSignIn by clicking on Google Button', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled()


    })


    test('Submit should call startEmailAndPasswordSignIn', () => {


        const email = 'jhoset@gmail.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Email' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });

        // console.log(emailField)

        // screen.debug();

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);
        expect(mockStartEmailAndPasswordSignIn).toHaveBeenCalledWith({email, password})




    })





})
