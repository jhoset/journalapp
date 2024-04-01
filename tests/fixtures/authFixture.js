export const initialState = {
    status: 'Checking', //? 'Checking' - 'Not-Authenticated' - 'Authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'Authenticated', //? 'Checking' - 'Not-Authenticated' - 'Authenticated'
    uid: '123abc',
    email: 'test@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'Not-Authenticated', //? 'Checking' - 'Not-Authenticated' - 'Authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: 'ABC123',
    email: 'demo@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
}